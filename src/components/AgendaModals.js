import React, { Component } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { modalVisibleSet } from '../redux/actions/agenda';
import AgendaCreate from './AgendaForms';
import AgendaList from './AgendaList';

class AgendaModal extends Component {

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
            <AgendaCreate />
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

export default connect(mapStateTopProps)(AgendaModal);