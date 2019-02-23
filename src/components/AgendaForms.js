import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

import { modalVisibleAgendaList , modalVisibleSet , createAgenda } from '../redux/actions/agenda';
import Input from './redux-form/Input';

class AgendaCreateForm extends Component {

  handleVisibleModal(visible){
    if(this.props.agenda.modalVisibleAgenda){
      this.props.dispatch(modalVisibleAgendaList(visible, this.props.agenda.selectedDate))
    } else {
      this.props.dispatch(modalVisibleSet(visible))
    }
  }

  handleCreate = (value) => {
    this.props.dispatch(createAgenda(value,this.props.agenda.selectedDate))
    if(this.props.agenda.modalVisibleAgenda){
      this.props.dispatch(modalVisibleAgendaList(false, this.props.agenda.selectedDate))
    } else {
      this.props.dispatch(modalVisibleSet(false))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>New Agenda</Text>
          <TouchableOpacity onPress={() => this.handleVisibleModal(false)}>
            <Icon name='cross' type='Entypo' style={styles.iconButtonClose} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
        <Icon name='calendar' type='Entypo' style={styles.iconButtonDate}> {this.props.agenda.selectedDate} </Icon>
          <Field
            name='name'
            placeholder='Agenda Name'
            height={40}
            component={Input}
          />
          <Field
            name='description'
            placeholder='Description'
            height={100}
            multiline={true}
            numberOfLines={5}
            component={Input}
          />
        </View>
        {this.props.pristine? (
            <Text style={[styles.textButton, {textAlign: 'left', color: '#dadada',marginVertical: 10,fontSize:17}]}>Create</Text>
          ):(
            <TouchableOpacity onPress={this.props.handleSubmit(this.handleCreate)}>
              <Text style={[styles.textButton, {textAlign: 'left', marginVertical: 10,fontSize:17}]}>Create</Text>
            </TouchableOpacity>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%'
  },
  header: {
    borderBottomColor: '#ababab',
    borderBottomWidth: 0.5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  titleHeader: {
    fontWeight: 'bold'
  },
  iconButtonClose: {
    color: 'red',
    fontSize: 21
  },
  iconButtonDate: {
    color: 'black',
    fontSize: 11, 
    marginVertical: 8
  },
  textButton: {
    color: '#2ecc71',
    width: 50,
    alignSelf: 'flex-end',
  },
  form: {
    paddingHorizontal: 5
  }
})

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default reduxForm({form: 'createAgenda'})(connect(mapStateToProps)(AgendaCreateForm));