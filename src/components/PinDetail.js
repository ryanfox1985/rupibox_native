import React, { Component } from 'react';
import {
  Text,
  View,
  Switch
} from 'react-native';
import axios from 'axios';

export default class PinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { pin: props.pin };
  }

  updatePin(value, pin) {
    console.log(`http://10.10.10.19:3000/pins/${pin.id}.json`);
    console.log(`value: ${value}`);

    // dispatch({ type: 'ADD_LOG', log: `GET: http://${server}:${port}/pins.json` });
    axios
      .put(`http://10.10.10.19:3000/pins/${pin.id}.json`, { value: value })
      .then(() => this.setState({ pin: Object.assign({}, pin, { value: value }) }));
  }

  render() {
    const { pin } = this.state;
    const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{pin.id}-{pin.name}</Text>
        <Text style={textStyle}>{pin.pin_pi}</Text>
        <Switch
          style={{ flex: 1 }}
          value={pin.value}
          onValueChange={(value) => this.updatePin(value, pin)}
        />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  textStyle: {
    flex: 1,
    fontSize: 15
  }
};
