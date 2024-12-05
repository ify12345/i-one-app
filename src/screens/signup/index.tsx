/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import {Dimensions, ScrollView, View} from 'react-native';
import * as yup from 'yup';
import React, {useState} from 'react';
import {Text, useTheme} from 'react-native-paper';
import CustomButton from '@/src/components/CustomButton';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import InputField from '@/src/components/InputField';
import {Country} from '@/src/types';
import CountryCodeData from '@/src/mocks/country-codes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch} from '@/src/redux/store';
import Toast from 'react-native-toast-message';
import {register} from '@/src/api/auth';
import Loader from '@/src/components/loader';
import styles from './styles';
import type {RegisterPayload, RejectValue} from '@/src/types/api';

const {width} = Dimensions.get('screen');

const commonPasswords = [
  'password',
  '123456',
  '123456789',
  'qwerty',
  'abc123',
  'football',
  '12345',
  'monkey',
  'letmein',
  '111111',
];

export default function SignUp({onSuccessfulRegistration}) {
  const {colors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<Country>(CountryCodeData[0]);
  const {t} = useTranslation('onboarding');
  const dispatch = useAppDispatch();

  function toggleCountryModal() {
    setCountryModalVisible(!countryModalVisible);
  }

  const checkPasswordCriteria = (password: string, email: string) => ({
    hasEightChars: password.length >= 8,
    hasUpperAndLower: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    hasNumberOrSymbol: /(?=.*[0-9])|(?=.*[\W_])/.test(password),
    doesNotContainEmail: email ? !password.toLowerCase().includes(email.toLowerCase()) : true,
    isNotCommonPassword: !commonPasswords.includes(password),
  });

  const signupValidationSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?:(?=.*\d)|(?=.*[\W_]))(?!.*\s).{8,}$/,
        'Enter a valid password',
      )
      .required(t('Password is required')),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  
  const submit = (values) => {
    const payload: RegisterPayload = { values };
  
    console.log('submitting values,', payload);
    setLoading(true);
  
    dispatch(register(payload))
      .unwrap()
      .then((response) => {
        setLoading(false);
  
        // Display success toast
        Toast.show({
          type: 'success',
          props: { message: response.message || 'Registration successful' },
        });
  
        onSuccessfulRegistration();
      })
      .catch((err) => {
        setLoading(false);
  
        // Prioritize error.response?.data
        const errorMessage =
          err?.msg || err?.response?.data?.detail || err?.response?.data?.message || 'An error occurred during registration';
  
        console.error('Error:', err);
  
        // Display error toast
        Toast.show({
          type: 'error',
          props: { message: errorMessage },
        });
      });
  };
  

  return (
    <ScrollView>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: '',
        }}
        onSubmit={values => submit(values)}>
        {({touched, handleChange, handleSubmit, errors, isValid, values}) => {
          const passwordCriteria = checkPasswordCriteria(values.password, values.email);
          return (
            <>
              <InputField
                label="First Name"
                error={touched.first_name && errors.first_name}
                errorMessage={errors.first_name}
                onChangeText={handleChange('first_name')}
                placeholder="First Name"
                required
                inputComponentStyle={{backgroundColor: colors.background}}
              />
              <InputField
                label="Last Name"
                error={touched.last_name && errors.last_name}
                errorMessage={errors.last_name}
                onChangeText={handleChange('last_name')}
                placeholder="Last Name"
                required
                inputComponentStyle={{backgroundColor: colors.background}}
              />
              <InputField
                label="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                error={touched.email && errors.email}
                errorMessage={errors.email}
                onChangeText={handleChange('email')}
                placeholder="Email Address"
                required
                inputComponentStyle={{backgroundColor: colors.background}}
              />
              <InputField
                password
                label="Password"
                error={touched.password && errors.password}
                errorMessage={errors.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                required
                inputComponentStyle={{backgroundColor: colors.background}}
              />
              <View style={{paddingLeft: 20, marginBottom: 10}}>
                <Text style={{color: passwordCriteria.hasEightChars ? 'green' : 'red'}}>
                  - At least 8 characters
                </Text>
                <Text style={{color: passwordCriteria.hasUpperAndLower ? 'green' : 'red'}}>
                  - Contains upper and lower case letters
                </Text>
                <Text style={{color: passwordCriteria.hasNumberOrSymbol ? 'green' : 'red'}}>
                  - Contains a number or symbol
                </Text>
                <Text style={{color: passwordCriteria.doesNotContainEmail ? 'green' : 'red'}}>
                  - Does not contain email
                </Text>
                <Text style={{color: passwordCriteria.isNotCommonPassword ? 'green' : 'red'}}>
                  - Is not a common password
                </Text>
              </View>
              <InputField
                password
                label="Confirm Password"
                error={touched.password_confirmation && errors.password_confirmation}
                errorMessage={errors.password_confirmation}
                onChangeText={handleChange('password_confirmation')}
                placeholder="Confirm Password"
                required
                inputComponentStyle={{backgroundColor: colors.background}}
              />

              <CustomButton
                primary
                title="Continue"
                onPress={() => handleSubmit()}
                disabled={!isValid}
                style={styles.createBtn}
              />
            </>
          );
        }}
      </Formik>

      <Loader visible={loading} />
    </ScrollView>
  );
}
