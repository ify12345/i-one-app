/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Animated,
  Dimensions,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import {useTheme, Text} from 'react-native-paper';
import CustomButton from '@/src/components/CustomButton';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '@/src/types/navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

export default function Onboard() {
  const {colors} = useTheme();
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation('onboarding');
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const navigation = useNavigation<RootStackScreenProps<'Onboard'>['navigation']>();

  function handleSignup() {
    navigation.navigate('Register');
  }

  function handleLogin() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaScreen style={styles.screen}>
      <View style={styles.imgContainer}>
        <ImageBackground
          resizeMode="cover"
          source={require('@/src/assets/images/logo_1.png')}
          style={styles.img1}
        />
      </View>

      <View>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 2,
            paddingHorizontal: 24,
            height: height * 0.4,
          }}>
          <ImageBackground
            resizeMode="cover"
            source={require('@/src/assets/images/onboarding_one.png')}
            style={styles.imgBackground}
            imageStyle={styles.img}
          />
        </View>
      </View>

      <View style={styles.imgOverlay}>
        <Text variant="bodyMedium" style={{color: 'black', textAlign: 'center'}}>
          The easy way to organize teams, schedule games, track stats, and find local 5-a-side venues!
        </Text>
      </View>

      <View
        style={{
          paddingBottom: bottom,
          paddingHorizontal: 24,
          gap: 22,
        }}>
        {/* First Button */}
        <CustomButton
          primary
          title='Create an account'
          onPress={handleSignup}
        />

        {/* Second Button */}
        <CustomButton
          title='Login'
          style={styles.loginBtn}
          onPress={handleLogin}
        />
      </View>
    </SafeAreaScreen>
  );
}
