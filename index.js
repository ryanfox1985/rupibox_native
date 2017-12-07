import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import RootReducer from './src/reducers/';

const store = createStore(RootReducer);

class WrapperApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rupibox_native', () => WrapperApp);
