import {ImageBackground, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomButton from '@/src/components/CustomButton';
import TopBar from '@/src/components/TopBar';
import styles from './styles';

export default function PaymentScreen() {
  return (
    <SafeAreaScreen style={styles.screen}>
      <TopBar/>
      <ScrollView>

      <View style={styles.service}>
        <ImageBackground
          source={require('@/src/assets/images/currency.png')}
          style={styles.imgBackground2}
          imageStyle={styles.img}
        />
        <Text variant='titleMedium' style={{color:'black'}}>My Services</Text>
        <Text>Tuition Fee Payment in Local Currency</Text>
        <CustomButton
          // primary
          style={styles.btn}
          title="Pay Now"
          titleStyle={{color: 'white'}}
        />
      </View>
      <View style={styles.service}>
        <ImageBackground
          source={require('@/src/assets/images/invest.png')}
          style={styles.imgBackground2}
          imageStyle={styles.img}
        />
        <Text variant='titleMedium' style={{color:'black'}}>OSHC Fee</Text>
        <Text>Pay for your Oversea Health Cover</Text>
        <CustomButton
          // primary
          style={styles.btn2}
          title="Pay Now"
          titleStyle={{color: 'white'}}
        />
      </View>
      </ScrollView>
    </SafeAreaScreen>
  );
}
