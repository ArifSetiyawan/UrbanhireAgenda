import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import AgendaCalendars from '../components/AgendaCalendars';
import AgendaModals from '../components/AgendaModals';
import { modalVisibleSet } from '../redux/actions/agenda';

class Agenda extends Component {

  handleVisibleModal(visible,modal,date){
    this.props.dispatch(modalVisibleSet(visible,modal,date))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#ff0f0f' barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Urbanhire Calendars Agenda</Text>
        </View>
        <AgendaCalendars />
        <AgendaModals />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  header: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ff0f0f',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 0.5
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color:"white"
  }
})

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateToProps)(Agenda);