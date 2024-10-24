import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomButton from '@/src/components/CustomButton';
import styles from './styles';

export default function BenefitScreen() {
  return (
    <SafeAreaScreen style={styles.screen}>
      <View style={styles.top}>
        <SearchSvg />
        <ImageBackground
          source={require('@/src/assets/images/logo_1.png')}
          style={styles.imgBackground}
          imageStyle={styles.img}
        />
        <Fontisto name="bell" size={24} color="black" />
      </View>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View style={styles.service}>
          <ImageBackground
            source={require('@/src/assets/images/invest.png')}
            style={styles.imgBackground2}
            imageStyle={styles.img}
          />
          <Text variant='titleMedium' style={{color:'black'}}>My Services</Text>
        </View>
        <View style={styles.service}>
          <ImageBackground
            source={require('@/src/assets/images/invest.png')}
            style={styles.imgBackground2}
            imageStyle={styles.img}
          />
          <Text variant='titleMedium' style={{color:'black'}}>My Services</Text>
        </View>
      </View>
    </SafeAreaScreen>
  );
}
