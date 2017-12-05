import React from 'react';
import { View } from 'react-native';

const SettingsDetail = (props) => (
  <View style={styles.viewStyle}>
    {props.children}
  </View>
);

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10
  }
};

export default SettingsDetail;
