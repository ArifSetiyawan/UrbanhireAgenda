import React, { Fragment, Component } from 'react';
import { Modal, View, StyleSheet, Text } from 'react-native';
import Button from "./button";
import { connect } from 'react-redux';

import { modalVisibleSet } from '../../redux/actions/agenda';
import AgendaForm from '../screens/AgendaCreate';
import AgendaList from '../screens/AgendaList';


class NativeModal extends Component {
  handleVisibleModal(visible){
    this.props.dispatch(modalVisibleSet(visible))
  }

  render() {
    return (
      <Modal
        visible={this.props.agenda.modalVisible}
        animationType={this.props.agenda.modal==='createAgenda'? 'fade':'slide'}
        transparent={true}
        onRequestClose={() => this.handleVisibleModal(false)}
      >
        <View style={styles.container}>
          {this.props.agenda.modal==='createAgenda'? (
            <AgendaForm />
          ):(
            <AgendaList />
          )}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
})

const mapStateTopProps = (state) => ({
  agenda: state.agenda
})

export default connect(mapStateTopProps)(NativeModal);