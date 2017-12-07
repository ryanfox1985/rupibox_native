import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import axios from 'axios';
import PinDetail from './PinDetail';

const pinDemoList = [
  { id: '1', name: 'test1', pin_pi: '10', value: true },
  { id: '2', name: 'test2', pin_pi: '11', value: false },
  { id: '3', name: 'test3', pin_pi: '12', value: false },
  { id: '4', name: 'test4', pin_pi: '13', value: true }
];

class PinList extends Component {
  state = { pins: this.props.state.settings.demo ? pinDemoList : [] };

  componentWillMount() {
    if (this.props.state.settings.demo) {
      return;
    }
    axios
      .get(`http://${this.props.state.settings.server}:${this.props.state.settings.port}/pins.json`)
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

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return { state: state };
};

// upgrade our component to become Redux-aware
export default connect(mapStateToProps)(PinList);
