import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { modalVisibleEventset , createAgenda , modalVisibleSet } from '../../redux/actions/agenda';
import Input from '../components/TextInput';
import uuidv1 from 'uuid';
class AgendaForm extends Component {

  handleVisibleModal(visible){
    if(this.props.agenda.modalVisibleEventset){
      this.props.dispatch(modalVisibleEventset(visible, this.props.agenda.selectedDate))
    } else {
      this.props.dispatch(modalVisibleSet(visible))
    }
  }

  handleCreate = (value) => {
        const name = value.name
        const description = value.description
        const data = {
            id :uuidv1(),
            name :name,
            description :description,
            selectedDate: this.props.agenda.selectedDate
        }
    this.props.dispatch(createAgenda(data))
    if(this.props.agenda.modalVisibleEventset){
      this.props.dispatch(modalVisibleSetEventset(false, this.props.agenda.selectedDate))
    } else {
      this.props.dispatch(modalVisibleSet(false))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.handleVisibleModal(false)}>
            <Text style={[styles.textButton, {color: '#e74c3c'}]}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.titleHeader}>New Events</Text>
          {this.props.pristine? (
            <Text style={[styles.textButton, {textAlign: 'right', color: '#dadada'}]}>Create</Text>
          ):(
            <TouchableOpacity onPress={this.props.handleSubmit(this.handleCreate)}>
              <Text style={[styles.textButton, {textAlign: 'right'}]}>Create</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.form}>
          <Field
            name='name'
            placeholder='Events Name'
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
          <Text style={{textAlign: 'center', marginVertical: 10}}>{this.props.agenda.selectedDate}</Text>
        </View>
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
  textButton: {
    color: '#2ecc71',
    width: 50
  },
  form: {
    paddingHorizontal: 5
  }
})

const mapStateToProps = (state) => ({
  agenda: state.agenda
})

export default reduxForm({form: 'createAgenda'})(connect(mapStateToProps)(AgendaForm));