import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import SettingsDetail from '../components/SettingsDetail'

export default class Settings extends Component {
  state = {
    server: '10.10.10.30',
    port: '3000'
  };

  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <SettingsDetail>
          <Text>Server:</Text>
          <TextInput />
        </SettingsDetail>
        <SettingsDetail>
          <Text>Port:</Text>
          <TextInput />
        </SettingsDetail>
        <SettingsDetail>
          <Button title='Save' />
        </SettingsDetail>
      </View>
    );
  }
}
