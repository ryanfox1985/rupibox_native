import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import PinDetail from './PinDetail';

class PinList extends Component {
  renderPins() {  
    return this.props.state.pins.map(pin =>
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
