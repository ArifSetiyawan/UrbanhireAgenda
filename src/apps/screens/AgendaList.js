import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';

import { modalVisibleEventset , modalVisibleSet } from '../../redux/actions/agenda';
import AgendaForm from './AgendaCreate';

class AgendaList extends Component {

  handleVisibleModal(visible,date){
    this.props.dispatch(modalVisibleEventset(visible,date))
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

    let events = this.props.agenda.events.filter(item => {
      return item.date === this.props.agenda.selectedDate
    })

    events = events.reverse()

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonClose} onPress={() => this.handleCloseModal()}>
            <Icon name='down' type='AntDesign' style={styles.iconButtonClose} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>{this.props.agenda.selectedDate}</Text>
        </View>
        {events.length === 0 ? (
          <View style={{flex: 1, alignItems: 'center', marginTop: '50%'}}>
            <Text style={{textAlign: 'center'}}>Empty</Text>
          </View>
        ):(
          <FlatList
            data={events}
            keyExtractor={(item,index) => index.toString()}
            renderItem={this._renderItem}
          />
        )}
        <TouchableOpacity onPress={() => this.handleVisibleModal(true,this.props.agenda.selectedDate)} style={styles.button}>
          <Icon name='plus' type='AntDesign' style={styles.iconButton} />
        </TouchableOpacity>
        <Modal
          visible={this.props.agenda.modalVisibleEventset}
          animationType='fade'
          transparent={true}
          onRequestClose={() => this.handleVisibleModal(false, this.props.agenda.selectedDate)}
        >
          <View style={styles.containerModal}>
            <AgendaForm />
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
    fontWeight: 'bold'
  },
  buttonClose: {
    marginRight: 10
  },
  iconButtonClose: {
    color: '#f39c12',
    fontSize: 20
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
  }
})

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateToProps)(AgendaList);