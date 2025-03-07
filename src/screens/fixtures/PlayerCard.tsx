/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {Colors} from '@/src/config/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

// Define the props interface
interface PlayerCardProps {
  number: string;
  name: string;
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EDFFF8',
    borderBottomColor: Colors.paleGreen,
    borderBottomWidth: 1,
    marginTop: 22,
    alignItems:'center'
  },
});

const PlayerCard: React.FC<PlayerCardProps> = ({ number, name }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.body}>
      <View style={{ flexDirection: 'row', gap: 13, alignItems: 'center' }}>
        <Text>{number}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            width: 43,
            height: 43,
            borderRadius: 100,
          }}>
          <Text style={{ color: 'white' }}>JD</Text>
        </View>
        <Text>{name}</Text>
      </View>
      <Ionicons name="arrow-forward-sharp" size={20} color="black" />
    </View>
  );
};

export default PlayerCard;
