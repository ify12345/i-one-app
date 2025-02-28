/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
import {FlatList, Image, ImageBackground, Linking, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import React, { useEffect } from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import TopBar from '@/src/components/TopBar';
import styles from './styles';


export default function ScheduleScreen() {

  return (
    <SafeAreaScreen style={styles.screen}>
      <TopBar/>
      

    </SafeAreaScreen>
  );
}
