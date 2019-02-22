import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {

  render() {
    const {height, multiline, numberOfLines } = this.props

    return (
      <TextInput
        placeholder={this.props.placeholder}
        onChangeText={this.props.input.onChange}
        style={[styles.input, {height: height}]}
        multiline={multiline || false}
        numberOfLines={numberOfLines || 1}
        value={this.props.input.value}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1
  }
})

export default Input;