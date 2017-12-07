import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import PinList from '../components/PinList';
import Header from '../components/Header';
import Settings from './Settings';

const ScreenPins = () => (
  <Settings />
);

const ScreenSettings = () => (
  <PinList />
);

const ScreenLog = () => (
  <View style={{ backgroundColor: '#673ab7' }} />
);

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pins' },
      { key: 'second', title: 'Settings' },
      { key: 'third', title: 'Logs' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });
  _renderHeader = props => <TabBar {...props} />;
  _renderScene = SceneMap({
    first: ScreenPins,
    second: ScreenSettings,
    third: ScreenLog
  });

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
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
