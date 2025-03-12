/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {useState} from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import moment from 'moment';
import {Text, useTheme} from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const DateScroller = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    listContainer: {
      paddingHorizontal: 16,
    },
    polygon: {
      height:54,
      width:54,
      marginHorizontal: 18,
      
      backgroundColor: colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.surface,
      transform: [{rotate: '45deg'}],
    },
    dateText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.onBackground,
      transform: [{rotate: '-45deg'}],
    },
    view:{
        flexDirection:'column',
        alignItems:'center',
        height: heightPercentageToDP(14), 
        marginVertical: 25,
        gap:20,
        borderBottomColor: colors.surface,
        borderBottomWidth:2,
    }
  });
  const generateDates = () => {
    return Array.from({length: 6}, (_, i) => moment().add(i, 'days').format('YYYY-MM-DD'));
  };

  const dates = generateDates();

  return (
    <FlatList
      data={dates}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      contentContainerStyle={styles.listContainer}
      renderItem={({item}) => {
        const isActive = selectedDate === item;
        return (
          <View style={styles.view}>

            <TouchableOpacity
              style={[styles.polygon, isActive && {backgroundColor: colors.primary}]}
              onPress={() => setSelectedDate(item)}>
              <Text variant="labelLarge" style={[styles.dateText, isActive && {color: '#FFF'}]}>
                {moment(item).format('DD')}
              </Text>
            </TouchableOpacity>
            <Text style={{color:'black'}}>{moment(item).format('dd')}</Text>
          </View>
        );
      }}
    />
  );
};

export default DateScroller;
