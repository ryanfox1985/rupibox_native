import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import axios from 'axios';
import PinDetail from './PinDetail';

export default class PinList extends Component {
  state = { pins: [] };

  componentWillMount() {
    axios
      .get('http://10.10.10.19:3000/pins.json')
      .then(response => this.setState({ pins: response.data }));
  }

  renderPins() {
    return this.state.pins.map(pin =>
      <PinDetail key={pin.id} pin={pin} />
    );
  }

  renderHeader() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textHeader}>Name</Text>
        <Text style={styles.textHeader}>Pin</Text>
        <Text style={styles.textHeader}>Value</Text>
      </View>
    );
  }

  render() {
    console.log(this.state);

    return (
      <View style={styles.pinList}>
        {this.renderHeader()}
        {this.renderPins()}
      </View>
    );
  }
}

const styles = {
  pinList: {    
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 5
  },
  textHeader: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  }
};
