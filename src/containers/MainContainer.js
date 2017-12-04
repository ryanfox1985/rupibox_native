import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import PinList from '../components/PinList';

const MainContainer = () => (
  <View>
    <Header headerText={'Rupibox'} />
    <PinList />
  </View>
);

export default MainContainer;
