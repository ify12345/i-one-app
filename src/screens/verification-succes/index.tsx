/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import LottieView from 'lottie-react-native';
import {Colors} from '@/src/config/colors';
import {RootStackScreenProps} from '@/src/types/navigation';
import styles from './styles';

export default function VerificationSuccess({
  navigation,
}: RootStackScreenProps<'AccountVerificationSuccess'>) {
  return (
    <SafeAreaScreen style={styles.container}>
      <View style={styles.imgContainer}>
              <ImageBackground
                resizeMode="cover"
                source={require('@/src/assets/images/logo_1.png')}
                style={styles.img1}
              />
            </View>

      <View>
        <ImageBackground
          source={require('@/src/assets/images/success.png')}
          style={styles.imgBackground2}
          imageStyle={styles.img1}
        />
        <Text style={styles.bigText}>Password Reset Successfully</Text>
        <Text style={styles.smallText}>Redirecting...</Text>

        <TouchableOpacity hitSlop={10} onPress={() => navigation.navigate('BottomTab')}>
          <Text variant="bodySmall" style={[styles.resendText, {color: Colors.paleGreen}]}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaScreen>
  );
}
