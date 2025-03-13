/* eslint-disable arrow-body-style */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { View,StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, useTheme } from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import TopBar from '@/src/components/TopBar';
import styles from './styles';
import { Colors } from '@/src/config/colors';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';

  const rounds = [
    { round: 1, matches: 8 },
    { round: 2, matches: 4 },
    { round: 3, matches: 2 },
    { round: 4, matches: 1 },
  ];

export default function TournamentDetails() {
  const { colors } = useTheme();
  const navigation = useNavigation();


  return (
    <SafeAreaScreen style={styles.screen}>
      <TopBar />
    
    </SafeAreaScreen>
  );
}
