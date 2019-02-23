import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal,Image} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';

import { modalVisibleAgendaList, modalVisibleSet } from '../redux/actions/agenda';
import AgendaCreate from './AgendaForms';

class AgendaList extends Component {

  handleVisibleModal(visible,date){
    this.props.dispatch(modalVisibleAgendaList(visible,date))
  }

  handleCloseModal(){
    this.props.dispatch(modalVisibleSet(false))
  }

  _renderItem = ({item}) => (
    <View style={styles.containerItem}>
      <View style={styles.headerItem}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.contentItem}>
        <Text style={{fontSize: 12}}>{item.description}</Text>
      </View>
    </View>
  )

  render() {

    let agendas = this.props.agenda.agendas.filter(item => {
      return item.date === this.props.agenda.selectedDate
    })

    agendas = agendas.reverse()

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonClose} onPress={() => this.handleCloseModal()}>
            <Icon name='chevron-down' type='Entypo' style={styles.iconButtonClose} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}> {this.props.agenda.selectedDate} </Text>
        </View>
        {
          agendas.length === 0 ? (
          <View style={{flex: 1}}>
          <Image source={require('../assets/image/datanot.png')} 
            style={styles.background} />
          </View>
        ):(
          <FlatList
            data={agendas}
            keyExtractor={(item,index) => index.toString()}
            renderItem={this._renderItem}
          />
        )}
        <TouchableOpacity onPress={() => this.handleVisibleModal(true,this.props.agenda.selectedDate)} style={styles.button}>
          <Icon name='plus' type='AntDesign' style={styles.iconButton} />
        </TouchableOpacity>
        <Modal
          visible={this.props.agenda.modalVisibleAgenda}
          animationType='fade'
          transparent={true}
          onRequestClose={() => this.handleVisibleModal(false, this.props.agenda.selectedDate)}
        >
          <View style={styles.containerModal}>
            <AgendaCreate />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'center'
  },
  buttonClose: {
    marginRight: 10
  },
  iconButtonClose: {
    color: 'black',
    fontSize: 26
  },
  button: {
    backgroundColor: '#2ecc71',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  iconButton: {
    color: '#fff'
  },
  containerItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    width: '90%'
  },
  headerItem: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    padding: 10
  },
  contentItem: {
    padding: 10,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  background: {
    width: '100%',
    backgroundColor:"white"
},
})

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateToProps)(AgendaList);