/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import {
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import React, {useState} from 'react';
import {Text, useTheme} from 'react-native-paper';
import {RootStackScreenProps} from '@/src/types/navigation';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import {Colors} from '@/src/config/colors';

import Login from '@/src/screens/login';
import SignUp from '@/src/screens/signup';

import styles from './styles';

export default function AuthScreens({navigation}: RootStackScreenProps<'Authentication'>) {
  const [selected, setSelected] = useState<number>(1);
  const {colors} = useTheme();
  const selectedButton = (button: number) => {
    setSelected(button);
  };
  const handleSuccessfulRegistration = () => {
    setSelected(2);
  };

  return (
    <SafeAreaScreen style={styles.screen}>
      
      <ImageBackground
        resizeMode="cover"
        source={require('@/src/assets/images/logo_1.png')}
        style={styles.img1}
      />
      {selected === 1 && (
        <View style={styles.container}>
          <Text variant="titleLarge" style={{color: colors.onBackground, textAlign: 'center'}}>
            Create An Account
          </Text>
          <Text variant="titleSmall" style={{textAlign: 'center'}}>
            Lorem ipsum dolor sit amet consectetur. Imperdiet vitae sit semper diam non enim.
            Blandit gravida lacinia uts.
          </Text>
        </View>
      )}
      {selected === 2 && (
        <View style={styles.container}>
          <Text variant="titleLarge" style={{color: colors.onBackground, textAlign: 'center'}}>
            Welcome Back
          </Text>
          <Text variant="titleSmall" style={{textAlign: 'center'}}>
            Lorem ipsum dolor sit amet consectetur. Imperdiet vitae sit semper diam non enim.
            Blandit gravida lacinia uts.
          </Text>
        </View>
      )}

      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => selectedButton(1)}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            // borderBottomWidth: 1,
            borderBottomWidth: selected === 1 ? 2 : 0,
            // borderBottomColor: selected === 1 ? Colors.paleGreen : '#F5FBF3',
            paddingHorizontal: 20,
            paddingVertical: 8,
            // borderRadius: 6,
            justifyContent: 'center',
            width: '50%',
          }}>
          <Text variant="bodyMedium" style={{color: selected === 1 ? '#155988' : '#A9AABD'}}>Sign up </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectedButton(2)}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            // borderBottomWidth: 1,
            borderBottomWidth: selected === 2 ? 2 : 0,
            
            paddingHorizontal: 20,
            paddingVertical: 8,
            // borderRadius: 6,
            justifyContent: 'center',
            width: '50%',
          }}>
          <Text variant="bodyMedium" style={{color: selected === 2 ? '#155988' : '#A9AABD'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={styles.fullView} behavior="height">
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {selected === 2 && <Login />}
          {selected === 1 && <SignUp onSuccessfulRegistration={handleSuccessfulRegistration} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaScreen>
  );
}
