/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
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
import SafeAreaScreen from '@/src/components/SafeAreaScreen';

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

export default function SignUp() {
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
    nick_name: yup.string().required('Nick name is required'),
    position: yup.string().required('position is required'),
    location: yup.string().required('location is required'),
    phone: yup.string().required('Phone number is required'),
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

  const submit = values => {
    const payload: RegisterPayload = {values};

    console.log('submitting values,', payload);
    setLoading(true);

    dispatch(register(payload))
      .unwrap()
      .then(response => {
        setLoading(false);

        // Display success toast
        Toast.show({
          type: 'success',
          props: {message: response.message || 'Registration successful'},
        });
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

  return (
    <SafeAreaScreen style={styles.screen}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginTop:52}}>
        <Text variant="bodyLarge" style={{color: 'black', textAlign: 'center'}}>
          Create An Account
        </Text>
        <View style={styles.imgContainer}>
          <ImageBackground
            resizeMode="cover"
            source={require('@/src/assets/images/logo_1.png')}
            style={styles.img1}
          />
        </View>
      </View>
      <ScrollView>
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            nick_name: '',
            position:'',
            location:'',
            phone:'',
            password_confirmation: '',
          }}
          onSubmit={values => submit(values)}>
          {({touched, handleChange, handleSubmit, errors, isValid, values}) => {
            const passwordCriteria = checkPasswordCriteria(values.password, values.email);
            return (
              <View style={{paddingTop:23}}>
                <View style={styles.name}>
                  <InputField
                    label="First Name"
                    error={touched.first_name && errors.first_name}
                    errorMessage={errors.first_name}
                    onChangeText={handleChange('first_name')}
                    placeholder="First Name"
                    required
                    inputComponentStyle={{backgroundColor: colors.background}}
                    style={{width: '46%'}}
                  />
                  <InputField
                    label="Last Name"
                    error={touched.last_name && errors.last_name}
                    errorMessage={errors.last_name}
                    onChangeText={handleChange('last_name')}
                    placeholder="Last Name"
                    required
                    inputComponentStyle={{backgroundColor: colors.background}}
                    style={{width: '46%'}}
                  />
                </View>
                <View style={styles.name}>
                  <InputField
                    label="Nickname"
                    error={touched.nick_name && errors.nick_name}
                    errorMessage={errors.nick_name}
                    onChangeText={handleChange('nick_name')}
                    placeholder="Maradona"
                    required
                    inputComponentStyle={{backgroundColor: colors.background}}
                    style={{width: '46%'}}
                  />
                  <InputField
                    label="Position"
                    error={touched.position && errors.position}
                    errorMessage={errors.position}
                    onChangeText={handleChange('position')}
                    placeholder="ST"
                    required
                    inputComponentStyle={{backgroundColor: colors.background}}
                    style={{width: '46%'}}
                  />
                </View>
                <InputField
                    label="Location"
                    error={touched.location && errors.location}
                    errorMessage={errors.location}
                    onChangeText={handleChange('location')}
                    placeholder="gbagada"
                    required
                    inputComponentStyle={{backgroundColor: colors.background}}
                  />
                <InputField
                  label="Email Address"
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
                  
                  label="Phone Number"
                  error={touched.phone && errors.phone}
                  errorMessage={errors.phone}
                  onChangeText={handleChange('phone')}
                  placeholder="+2345674"
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
                {/* <InputField
                  password
                  label="Confirm Password"
                  error={touched.password_confirmation && errors.password_confirmation}
                  errorMessage={errors.password_confirmation}
                  onChangeText={handleChange('password_confirmation')}
                  placeholder="Confirm Password"
                  required
                  inputComponentStyle={{backgroundColor: colors.background}}
                /> */}

                <CustomButton
                  primary
                  title="Create an account"
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  style={styles.createBtn}
                />
              </View>
            );
          }}
        </Formik>

        <Loader visible={loading} />
      </ScrollView>
    </SafeAreaScreen>
  );
}
