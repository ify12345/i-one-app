/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import {ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import SearchSvg from '../assets/svg/searchSvg';
import BackButton from './BackButton';
import BookMark from '../assets/svg/BookMark';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 24,
  },
  imgBackground: {
    width: 200,
    height: 40,
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default function TopBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <BackButton />
      <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 26, gap: 3}}>
        <Text style={{color: 'black'}} variant="displayLarge">
          Upcoming Match
        </Text>
        <Text style={{color: 'black'}} variant="displayMedium">
          Tiger Sports Sangotedo, Lagos
        </Text>
        <Text style={{color: 'black'}} variant="displayMedium">
          Tue, Mar 19
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <BookMark />
      </TouchableOpacity>
    </View>
  );
}
