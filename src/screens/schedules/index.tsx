/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import TopBar from '@/src/components/TopBar';
import styles from './styles';
import CalendarIcon from '@/src/assets/svg/Calendar';
import {Ionicons} from '@expo/vector-icons';
import DateScroller from '@/src/components/DateScroller';
import {Colors} from '@/src/config/colors';
import Octicons from '@expo/vector-icons/Octicons';
import Polygon from '@/src/assets/svg/PolygonSvg';

export default function ScheduleScreen() {
  const [search, setSearch] = useState('');
  const {colors} = useTheme();
  const [filter, setFilter] = useState<'all' | 'tournaments' | 'friendlies'>('all');
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});

  const toggleDropdown = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked item
    }));
  };
  const dates = [
    {
      location: 'Victoria Island Cup',
      time: ['14:00', '12:00'],
    },
    {
      location: 'Victoria Island Cup',
      time: ['14:00', '12:00'],
    },
    {
      location: 'Victoria Island Cup',
      time: ['14:00', '12:00'],
    },
  ];
  return (
    <SafeAreaScreen style={styles.screen}>
      <View style={styles.topNav}>
        <Text variant="bodyLarge" style={{color: 'black'}}>
          Match Schedule
        </Text>

        <CalendarIcon />
      </View>
      <View>
        <DateScroller />

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="New game?"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.plusButton}>
            <Ionicons name="add" size={24} color="#7D7D7D" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.filter, filter === 'all' && {backgroundColor: colors.primary}]}
          onPress={() => setFilter('all')}>
          <Text style={[filter === 'all' && {color: 'black'}]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filter, filter === 'tournaments' && {backgroundColor: colors.primary}]}
          onPress={() => setFilter('tournaments')}>
          <Text style={[filter === 'tournaments' && {color: 'black'}]}>Tournaments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filter, filter === 'friendlies' && {backgroundColor: colors.primary}]}
          onPress={() => setFilter('friendlies')}>
          <Text style={[filter === 'friendlies' && {color: 'black'}]}>Friendlies</Text>
        </TouchableOpacity>
      </View>

      {filter === 'all' && (
        <FlatList
          data={dates}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({item, index}) => {
            const isOpen = openItems[index];

            return (
              <View style={styles.view}>
                <View style={styles.top}>
                  <View style={{flexDirection: 'row', paddingVertical: 17, flex: 1}}>
                    <View style={[styles.polygon]}>
                      <Text variant="labelLarge" style={styles.dateText}>
                        VI
                      </Text>
                    </View>
                    <Text>{item.location}</Text>
                  </View>
                  <View
                    style={{
                      borderLeftColor: Colors.grey,
                      borderLeftWidth: 1,
                      paddingHorizontal: 22,
                    }}>
                    <TouchableOpacity onPress={() => toggleDropdown(index)}>
                      {isOpen ? (
                        <Octicons name="chevron-up" size={24} color="black" />
                      ) : (
                        <Octicons name="chevron-down" size={24} color="black" />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                {isOpen && (
                  <View style={styles.score}>
                    <Text
                      style={{
                        paddingBottom: 4,
                        transform: [{rotate: '-90deg'}],
                        color: 'black',
                        fontSize: 8,
                        paddingTop: 4,
                      }}>
                      14:00
                    </Text>
                    <View
                      style={{
                        borderLeftColor: Colors.grey,
                        borderLeftWidth: 1,
                        borderRightColor: Colors.grey,
                        borderRightWidth: 1,
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'column', gap: 6}}>
                        <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                          <View style={{position: 'relative'}}>
                            <Polygon />
                            <Text
                              style={{
                                position: 'absolute',
                                zIndex: 30,
                                top: 4,
                                fontSize: 8,
                                left: 5,
                              }}>
                              TN
                            </Text>
                          </View>
                          <Text style={{color: 'black'}}>Team Name</Text>
                        </View>
                        <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                          <View style={{position: 'relative'}}>
                            <Polygon />
                            <Text
                              style={{
                                position: 'absolute',
                                zIndex: 30,
                                top: 4,
                                fontSize: 8,
                                left: 5,
                              }}>
                              TN
                            </Text>
                          </View>
                          <Text style={{color: 'black'}}>Team Name</Text>
                        </View>
                      </View>
                      <Text style={{color: 'black'}}>85&#39;</Text>
                    </View>
                    <View style={{flexDirection: 'column', paddingHorizontal: 25, gap: 6}}>
                      <Text style={{color: 'black'}}>2</Text>
                      <Text style={{color: 'black'}}>0</Text>
                    </View>
                  </View>
                )}
              </View>
            );
          }}
        />
      )}
    </SafeAreaScreen>
  );
}
