import React, { useEffect } from 'react';
import { FlatList, Image, ImageBackground, Linking, TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomButton from '@/src/components/CustomButton';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '@/src/redux/store';
import { getServices } from '@/src/api/auth';
import TopBar from '@/src/components/TopBar';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

 

  return (
    <SafeAreaScreen style={styles.screen}>
      {/* Top Header */}
       <TopBar/>

      {/* Services Section */}
      <View style={styles.service}>
        <ImageBackground
          source={require('@/src/assets/images/invest.png')}
          style={styles.imgBackground2}
          imageStyle={styles.img}
        />
        <Text variant="titleMedium" style={{ color: 'black' }}>
          My Services
        </Text>
        <CustomButton
          style={styles.btn}
          title="Request More Service"
          titleStyle={{ color: 'white' }}
        />
      </View>

    
     
    </SafeAreaScreen>
  );
}
