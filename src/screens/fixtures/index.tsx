/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import TopBar from '@/src/components/TopBar';
import { Text, useTheme } from 'react-native-paper';
import styles from './styles';
import PolygonShape from '@/src/components/PolygonComponent';
import Lineups from './lineups';

export default function Fixtures() {
  const [selectedTab, setSelectedTab] = useState<'lineups' | 'substitutes'>('lineups');
  const { colors } = useTheme();

  return (
    <SafeAreaScreen style={styles.screen}>
      <TopBar />

      
      <View style={styles.versus}>
        <PolygonShape centerContent="TN" bottomContent="Team Name" />
        <Text style={{ color: 'black', borderTopWidth: 1, paddingTop: 6 }} variant="displayMedium">
          14:00
        </Text>
        <PolygonShape centerContent="TN" bottomContent="Team Name" />
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => setSelectedTab('lineups')}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.navText,selectedTab === 'lineups' && { color: 'black' }]}>Lineups</Text>
            {selectedTab === 'lineups' && (
              <View style={{ width: '50%', height: 2, backgroundColor: colors.primary, marginTop: 4 }} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('substitutes')}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.navText,selectedTab === 'substitutes' && { color: 'black'}]}>Substitutes</Text>
            {selectedTab === 'substitutes' && (
              <View style={{ width: '50%', height: 2, backgroundColor: colors.primary, marginTop: 4 }} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      {
        selectedTab === 'lineups' && (
            <Lineups/>
        )
      }
    </SafeAreaScreen>
  );
}
