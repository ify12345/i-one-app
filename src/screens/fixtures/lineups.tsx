/* eslint-disable import/extensions */
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Text, useTheme} from 'react-native-paper';
import SquadIcon from '@/src/assets/svg/Squad';
import PitchIcon from '@/src/assets/svg/PitchSvg';
import PlayerCard from './PlayerCard';
import Pitch from './Pitch';

const squadList = [
  {
    role: 'Goalkeeper',
    players: [{ name: 'John Doe', number: '1' }]
  },
  {
    role: 'Defenders',
    players: [
      { name: 'Jane Smith', number: '2' },
      { name: 'Alex Brown', number: '3' },
    ]
  },
  {
    role: 'Midfielders',
    players: [{ name: 'John Doe', number: '4' },   { name: 'Chris White', number: '5' },   { name: 'Chris White', number: '6' }]
  },
  {
    role: 'Forward',
    players: [{ name: 'John Doe', number: '7' }]
  }
];

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 35,
    paddingTop: 17,
    paddingBottom: 300
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  team: {
    width: 29,
    height: 29,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
});

const renderSquadList = ({ item }) => (
  <View style={{ marginTop: 31 }}>
    <Text style={{color:'black',fontWeight:800}}>{item.role}</Text>
    {item.players.map((player, index) => (
      <PlayerCard key={index} number={player.number} name={player.name} />
    ))}
  </View>
);

export default function Lineups() {
  const [team, setTeam] = useState<'team1' | 'team2'>('team1');
  const [lineups, setLineups] = useState<'lineups' | 'squad'>('lineups');
  const { colors } = useTheme();
  const iconFill = lineups === 'lineups' ? colors.primary : colors.onSurface;
  const iconFillSquad = lineups === 'squad' ? colors.primary : colors.onSurface;

  return (
    <View style={styles.screen}>
      <View style={styles.navigation}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.team, team === 'team1' && { backgroundColor: colors.primary }]}
            onPress={() => setTeam('team1')}>
            <Text style={{ color: 'black' }}>T1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.team, team === 'team2' && { backgroundColor: colors.primary }]}
            onPress={() => setTeam('team2')}>
            <Text style={{ color: 'black' }}>T2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => setLineups('lineups')}>
            <SquadIcon color={iconFill} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLineups('squad')}>
            <PitchIcon color={iconFillSquad} />
          </TouchableOpacity>
        </View>
      </View>

      {lineups === 'lineups' && (
        <FlatList
          data={squadList}
          renderItem={renderSquadList}
          keyExtractor={(item, index) => `${item.role}-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      {
        lineups === 'squad' && (
          <Pitch/>
        )
      }
    </View>
  );
}
