import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  CheckBox
} from 'react-native';
import RowDetail from '../components/RowDetail';

class Settings extends Component {
  changeSettings(newSettings) {
    const currentSettings = this.props.state.settings;
    this.props.saveSettings(Object.assign({}, currentSettings, newSettings));
  }
  render() {
    const { server, port, demo } = this.props.state.settings;

    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <RowDetail>
          <Text>Server:</Text>
          <TextInput
            onChangeText={(value) => this.changeSettings({ server: value })}
            value={server}
          />
        </RowDetail>
        <RowDetail>
          <Text>Port:</Text>
          <TextInput
            onChangeText={(value) => this.changeSettings({ port: value })}
            value={port}
          />
        </RowDetail>
        <RowDetail>
          <Text>Demo:</Text>
          <CheckBox
            onChange={() => this.changeSettings({ demo: !demo })}
            value={demo}
          />
        </RowDetail>
      </View>
    );
  }
}

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch) => ({
  saveSettings: (settings) => {
    dispatch({ type: 'ADD_LOG', log: `SET_SETTINGS: ${JSON.stringify(settings)}` });
    dispatch({ type: 'SET_SETTINGS', settings: settings });
  }
});

// upgrade our component to become Redux-aware
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
