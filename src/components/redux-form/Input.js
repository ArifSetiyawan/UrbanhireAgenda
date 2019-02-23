import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {

  render() {
    const { input, placeholder, height, multiline, numberOfLines } = this.props

    return (
      <TextInput
        placeholder={placeholder}
        style={[styles.input, {height: height}]}
        multiline={multiline || false}
        numberOfLines={numberOfLines || 1}
        onChangeText={input.onChange}
        value={input.value}
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