import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import RowDetail from '../components/RowDetail';

class Logs extends Component {
  renderLogs() {
    return this.props.state.logs.map((log, index) =>
      <RowDetail id={index}>
        <Text>{log}</Text>
      </RowDetail>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        { this.renderLogs() }
      </View>
    );
  }
}

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return { state: state };
};

// upgrade our component to become Redux-aware
export default connect(mapStateToProps)(Logs);
