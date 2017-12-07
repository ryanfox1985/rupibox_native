import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Header from '../components/Header';
import PinList from './PinList';
import Settings from './Settings';
import Logs from './Logs';
import PinsApi from '../services/Api';

const ScreenPins = () => (
  <PinList />
);

const ScreenSettings = () => (
  <Settings />
);

const ScreenLog = () => (
  <Logs />
);

class App extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'first', title: 'Settings' },
      { key: 'second', title: 'Pins' },
      { key: 'third', title: 'Logs' }
    ]
  };

  _handleIndexChange = (index) => {
    if (index === 1) {
      this.props.loadPins(this.props.state.settings);
    }

    this.setState({ index });
  };

  _renderHeader = props => <TabBar {...props} />;
  _renderScene = SceneMap({
    first: ScreenSettings,
    second: ScreenPins,
    third: ScreenLog
  });

  componentWillMount() {
    this.props.loadPins(this.props.state.settings);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Rupibox'} />
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch) => ({
  loadPins: (settings) => {
    dispatch({ type: 'SET_PINS', pins: [] });
    PinsApi.getAllPins(dispatch, settings);
  }
});

// upgrade our component to become Redux-aware
export default connect(mapStateToProps, mapDispatchToProps)(App);
