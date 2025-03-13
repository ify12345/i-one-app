/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import {FlatList, ImageBackground, ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomButton from '@/src/components/CustomButton';
import TopBar from '@/src/components/TopBar';
import styles from './styles';
import DateScroller from '@/src/components/DateScroller';
import FilterIcon from '@/src/assets/svg/FilterSvg';
import Entypo from '@expo/vector-icons/Entypo';
import {Colors} from '@/src/config/colors';
import { useNavigation } from '@react-navigation/native';


const locations = [
  { id: '1', name: 'Victoria Island', shortName: 'VI' },
  { id: '2', name: 'Lekki', shortName: 'LK' },
  { id: '3', name: 'Ikeja', shortName: 'IK' },
];

export default function TournamentScreen() {
  const {colors} = useTheme();
  const navigation = useNavigation()
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('tournamentDetail')}
      style={styles.top}
    >
      <View style={{ flexDirection: 'row', paddingVertical: 17, flex: 1 }}>
        <View style={styles.polygon}>
          <Text variant="labelLarge" style={styles.dateText}>
            {item.shortName}
          </Text>
        </View>
        <Text variant="bodyMedium" style={{ color: 'black', marginLeft: 10 }}>
          {item.name}
        </Text>
      </View>
      <View
        style={{
          borderLeftColor: Colors.grey,
          borderLeftWidth: 1,
          paddingHorizontal: 22,
          paddingVertical: 17,
        }}
      >
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaScreen style={styles.screen}>
      <View style={styles.topNav}>
        <Text variant="bodyLarge" style={{color: 'black'}}>
          Tournaments
        </Text>

        <DateScroller />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="New game?"
          // value={search}
          // onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.plusButton}>
          <FilterIcon />
        </TouchableOpacity>
      </View>


      <FlatList
      data={locations}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap:20, marginVertical:12 }}
    />
    </SafeAreaScreen>
  );
}
