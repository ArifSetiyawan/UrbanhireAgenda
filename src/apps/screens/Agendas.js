import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';

import Agenda from '../components/Agenda';
import Modals from '../components/modal';
import { modalVisibleSet } from '../../redux/actions/agenda';

class Agendas extends Component {

  handleVisibleModal(visible,modal,date){
    this.props.dispatch(modalVisibleSet(visible,modal,date))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#3498db' barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Urbanhire Calendar Agenda</Text>
        </View>
        <Agenda />
        <Modals />
        <TouchableOpacity onPress={() => this.handleVisibleModal(true,'createAgenda',this.props.agenda.dateNow)} style={styles.button}>
          <Icon name='plus' type='AntDesign' style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
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
  header: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 0.5
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateToProps)(Agendas);