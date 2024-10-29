/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import {
  Dimensions,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import * as yup from 'yup';
import React, { useState } from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import { useTheme, Text } from 'react-native-paper';
import CustomButton from '~components/CustomButton';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '~types/navigation';
import { Colors } from '~config/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InputField from '~components/InputField';
import { useAppDispatch } from '~redux/store';
import Toast from 'react-native-toast-message';
import CountryCodeData from '~mocks/country-codes';
import CountryCodeModal from '~components/modals/CountryCodeModal';
import { Country } from '~types';

import Loader from '~components/loader';
import styles from './styles';
import { login } from '@/src/api/auth';
import { useAppSelector } from '@/src/redux/store';

const { width } = Dimensions.get('screen');

type FormValues = {
  email_or_phone: string;
  email_or_phones: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export default function Login() {
  const { colors } = useTheme();

  const { t } = useTranslation('onboarding');
  const navigation = useNavigation<RootStackScreenProps<'Onboard'>['navigation']>();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const {isAuthenticated, isVerified} = useAppSelector((store) => store.auth)
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  console.log(isAuthenticated)

  function toggleCountryModal() {
    setCountryModalVisible(!countryModalVisible);
  }

  const handleSubmit = async values => {
    setLoading(true);
    console.log(values);

    try {
      const response = await dispatch(login(values)).unwrap();
      setLoading(false);
      Toast.show({ type: 'success', props: { message: response.message} });
      navigation.navigate('BottomTab')
    } catch (err:any) {
      setLoading(false);
      const errorMessage = err.msg || 'An unexpected error occurred. Please try again.';
      Toast.show({type: 'error', props: {message: errorMessage}});

    }
  };

  const loginValidationSchema = yup.object().shape({
    email: yup.string().email(t('Enter a valid email')).required(t('Email is required')),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?:(?=.*\d)|(?=.*[\W_]))(?!.*\s).{8,}$/,
        t('Enter a valid password'),
      )
      .required(t('required_password', { ns: 'login' })),
  });

  return (
    <KeyboardAvoidingView style={styles.fullView} behavior="height">
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}>
          {({ touched, handleChange, handleSubmit, errors, isValid, values }) => (
            <>
              <InputField
                required
                label="Email"
                keyboardType="email-address"
                error={touched.email && errors.email}
                errorMessage={errors.email}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                placeholder={t('Email Address', { ns: 'login' })}
                inputComponentStyle={{ backgroundColor: colors.background }}
              />
              <InputField
                password
                required
                label="Password"
                error={touched.password && errors.password}
                errorMessage={errors.password}
                onChangeText={handleChange('password')}
                autoCapitalize="none"
                placeholder={t('Password', { ns: 'login' })}
                inputComponentStyle={{ backgroundColor: colors.background }}
              />
              <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                  variant="labelSmall"
                  style={[{ color: Colors.paleGreen, alignSelf: 'flex-end' }]}>
                  {t('Forgot password', { ns: 'login' })}
                </Text>
              </TouchableWithoutFeedback>
              <CustomButton
                primary
                title="Continue"
                onPress={() => handleSubmit()}
                style={styles.createBtn}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      
      </ScrollView>
      <Loader visible={loading} />
    </KeyboardAvoidingView>
  );
}
