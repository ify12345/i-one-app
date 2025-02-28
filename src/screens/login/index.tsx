/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import {
  Dimensions,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import * as yup from 'yup';
import React, {useState} from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import {useTheme, Text} from 'react-native-paper';
import CustomButton from '@/src/components/CustomButton';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '@/src/types/navigation';
import {Colors} from '@/src/config/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InputField from '@/src/components/InputField';
import {useAppDispatch} from '@/src/redux/store';
import Toast from 'react-native-toast-message';

import Loader from '@/src/components/loader';
import styles from './styles';
import {login} from '@/src/api/auth';
import {useAppSelector} from '@/src/redux/store';

const {width} = Dimensions.get('screen');

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
  const {colors} = useTheme();

  const {t} = useTranslation('onboarding');
  const navigation = useNavigation<RootStackScreenProps<'Onboard'>['navigation']>();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const {isAuthenticated, isVerified} = useAppSelector(store => store.auth);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  console.log(isAuthenticated);

  function toggleCountryModal() {
    setCountryModalVisible(!countryModalVisible);
  }
  const submit = values => {
    const payload: LoginPayload = {values};

    console.log('submitting values,', payload);
    setLoading(true);

    dispatch(login(payload))
      .unwrap()
      .then(response => {
        setLoading(false);

        // Display success toast
        Toast.show({
          type: 'success',
          props: {message: response.message || 'Login successful'},
        });

        navigation.navigate('BottomTab');
      })
      .catch(err => {
        setLoading(false);

        // Prioritize error.response?.data
        const errorMessage =
          err?.msg ||
          err?.response?.data?.detail ||
          err?.response?.data?.message ||
          'An error occurred during registration';

        console.error('Error:', err);

        // Display error toast
        Toast.show({
          type: 'error',
          props: {message: errorMessage},
        });
      });
  };

  const loginValidationSchema = yup.object().shape({
    email: yup.string().email(t('Enter a valid email')).required(t('Email is required')),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?:(?=.*\d)|(?=.*[\W_]))(?!.*\s).{8,}$/,
        t('Enter a valid password'),
      )
      .required(t('required_password', {ns: 'login'})),
  });

  return (
    <SafeAreaScreen style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 52,
        }}>
        <Text variant="bodyLarge" style={{color: 'black', textAlign: 'center'}}>
          Welcome Back
        </Text>
        <View style={styles.imgContainer}>
          <ImageBackground
            resizeMode="cover"
            source={require('@/src/assets/images/logo_1.png')}
            style={styles.img1}
          />
        </View>
      </View>
      <KeyboardAvoidingView style={styles.fullView} behavior="height">
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => submit(values)}>
            {({touched, handleChange, handleSubmit, errors, isValid, values}) => (
              <View style={{flexDirection: 'column', justifyContent: 'space-between',flex:1}}>
                <View>
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
                    placeholder={t('Email Address', {ns: 'login'})}
                    inputComponentStyle={{backgroundColor: colors.background}}
                  />
                  <InputField
                    password
                    required
                    label="Password"
                    error={touched.password && errors.password}
                    errorMessage={errors.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    placeholder={t('Password', {ns: 'login'})}
                    inputComponentStyle={{backgroundColor: colors.background}}
                  />
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text
                      variant="bodySmall"
                      style={[{color: Colors.paleGreen, alignSelf: 'flex-end'}]}>
                      {t('Forgot password?', {ns: 'login'})}
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
                <CustomButton
                  primary
                  title="Continue"
                  onPress={() => handleSubmit()}
                  style={styles.createBtn}
                  disabled={!isValid}
                />
              </View>
            )}
          </Formik>
        </ScrollView>
        <Loader visible={loading} />
      </KeyboardAvoidingView>
    </SafeAreaScreen>
  );
}
