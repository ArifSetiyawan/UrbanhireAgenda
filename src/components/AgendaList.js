import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal,Image} from 'react-native';
import { Icon ,Fab,Card,CardItem,Body, H2 } from 'native-base';
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
        <Card style={styles.containerItem}>
          <CardItem style={styles.contentItem}>
            <Body>
              <Text style={{fontWeight:"bold",fontSize:20,color:'white'}}>{item.name}</Text>
            </Body>
          </CardItem>
          <CardItem style={styles.contentItem}>
              <Text note style={{color:'white'}}>{item.description}</Text>
          </CardItem>
        </Card>
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
          <H2 style={styles.titleHeader}> Your agenda today</H2><Icon name='emoji-happy' type='Entypo' style={styles.iconButtonClose} />
        </View>
        {
          agendas.length === 0 ? (
          <View style={{flex:1}}>
            <Image source={require('../assets/image/datanot.png')} 
              style={styles.background} />
            <Fab
              containerStyle={{ justifyContent: 'center', alignItems: 'center'}}
              style={styles.button}
              position="bottomRight"
              onPress={() => this.handleVisibleModal(true,this.props.agenda.selectedDate)}>
              <Icon name="plus" type="AntDesign" />
            </Fab>
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
          
        ):(
          <FlatList
            data={agendas}
            keyExtractor={(item,index) => index.toString()}
            renderItem={this._renderItem}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    flex:1,
    borderRadius:5
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
    alignSelf:'center',
    alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight:10
  },
  button: {
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonClose: {
    marginRight: 10
  },
  iconButtonClose: {
    color: 'black',
    fontSize: 26
  },
  iconButton: {
    color: '#fff'
  },
  containerItem: {
    backgroundColor: '#ff0f0f',
    borderColor:'#ff0f0f',
    borderRadius: 6,
    alignSelf: 'center',
    width: '90%'
  },
  contentItem: {
    padding: 10,
    backgroundColor: '#ff0f0f'
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