/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import {Dimensions, View, TouchableWithoutFeedback} from 'react-native';
import * as yup from 'yup';
import React, {useState} from 'react';
import {useTheme, Text} from 'react-native-paper';
import CustomButton from '@/src/components/CustomButton';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '@/src/types/navigation';
import InputField from '@/src/components/InputField';
import {Country} from '@/src/types';
import CountryCodeData from '@/src/mocks/country-codes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CountryCodeModal from '@/src/components/modals/CountryCodeModal';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Colors} from '@/src/config/colors';
import {useAppDispatch, useAppSelector} from '@/src/redux/store';
import Toast from 'react-native-toast-message';
import {register} from '@/src/api/auth';
import Loader from '@/src/components/loader';
import DropDown from '@/src/components/DropDown';
import styles from './styles';

const {width} = Dimensions.get('screen');
type RegisterPayload = {
  email: string;
  phone_number: string;
  password: string;
  acceptTexts: boolean;
  user_type_id: string;
};
type SignupTwoInput = {
  email: string;
  phone: string;
  password: string;
  userTypeId: string;
  acceptTexts: boolean;
};
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
  // Add more common passwords as needed
];

export default function SignUp({
  onSuccessfulRegistration,
  navigation,
}: RootStackScreenProps<'Authentication'> & {onSuccessfulRegistration: () => void}) {
  const {colors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<Country>(CountryCodeData[0]);

  const {t} = useTranslation('onboarding');

  function toggleCountryModal() {
    setCountryModalVisible(!countryModalVisible);
  }
  // const {user} = useAppSelector(store => store.auth);
  // console.log(user);

  const dispatch = useAppDispatch();
  // function submit() {
  //   navigation.navigate('BottomTab');
  //   // const payload: RegisterPayload = {
  //   //   email,
  //   //   phone_number: `${country.countryDialCode}${phone}`,
  //   //   password,
  //   //   acceptTexts,
  //   //   user_type_id: userTypeId,
  //   // };

  //   // setLoading(true);
  //   // dispatch(register(payload))
  //   //   .unwrap()
  //   //   .then(response => {
  //   //     setLoading(false);
  //   //     console.log('Success:', response);
  //   //     console.log('Role:', payload.user_type_id);
  //   //     navigation.navigate('Verify', {email: payload.email, phone: payload.phone_number});
  //   //     // onSuccessfulRegistration();
  //   //   })
  //   //   .catch(err => {
  //   //     setLoading(false);
  //   //     Toast.show({
  //   //       type: 'error',
  //   //       props: {message: err?.detail},
  //   //     });
  //   //   });
  // }

  const checkPasswordCriteria = (password: string, email: string) => ({
    hasEightChars: password.length >= 8,
    hasUpperAndLower: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    hasNumberOrSymbol: /(?=.*[0-9])|(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password),
    doesNotContainEmail: email ? !password.toLowerCase().includes(email.toLowerCase()) : true,
    isNotCommonPassword: !commonPasswords.includes(password),
  });

  const signupOneValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('valid_email', {ns: 'login'}))
      .trim()
      .required(t('Email is required')),
    phone: yup.string().required(t('Number is required')),
    userTypeId: yup.string().required(t('')),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?:(?=.*\d)|(?=.*[\W_]))(?!.*\s).{8,}$/,
        t('Enter a valid password'),
      )
      .required(t('required_password', {ns: 'login'})),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t('Passwords must match'))
      .required(t('Confirm Password is required')),
    acceptTexts: yup.boolean().oneOf([true], t('accept_terms')),
  });

  return (
    <>
      <Formik
        validationSchema={signupOneValidationSchema}
        initialValues={{
          userTypeId: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          acceptTexts: false,
        }}
        onSubmit={values => submit(values)}>
        {({touched, handleChange, handleSubmit, errors, isValid, values, setFieldValue}) => {
          const passwordCriteria = checkPasswordCriteria(values.password, values.email);
          return (
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

              {errors.password && (
                <View style={styles.criteriaContainer}>
                  <Text style={styles.criteriaText}>{t('Create a password that:')}</Text>
                  <View style={styles.passwordCriteria}>
                    <AntDesign
                      name={passwordCriteria.hasEightChars ? 'check' : 'close'}
                      size={16}
                      color={passwordCriteria.hasEightChars ? Colors.paleGreen : Colors.jasper}
                    />
                    <Text
                      variant="bodySmall"
                      style={{
                        marginLeft: 5,
                        color: passwordCriteria.hasEightChars ? Colors.paleGreen : Colors.jasper,
                      }}>
                      Contains at least 8 characters
                    </Text>
                  </View>
                  <View style={styles.passwordCriteria}>
                    <AntDesign
                      name={passwordCriteria.hasUpperAndLower ? 'check' : 'close'}
                      size={16}
                      color={passwordCriteria.hasUpperAndLower ? Colors.paleGreen : Colors.jasper}
                    />
                    <Text
                      variant="bodySmall"
                      style={{
                        marginLeft: 5,
                        color: passwordCriteria.hasUpperAndLower ? Colors.paleGreen : Colors.jasper,
                      }}>
                      Contains both upper (A-Z) and lower (a-z) case letters
                    </Text>
                  </View>
                  <View style={styles.passwordCriteria}>
                    <AntDesign
                      name={passwordCriteria.hasNumberOrSymbol ? 'check' : 'close'}
                      size={16}
                      color={passwordCriteria.hasNumberOrSymbol ? Colors.paleGreen : Colors.jasper}
                    />
                    <Text
                      variant="bodySmall"
                      style={{
                        marginLeft: 5,
                        color: passwordCriteria.hasNumberOrSymbol
                          ? Colors.paleGreen
                          : Colors.jasper,
                      }}>
                      Contains at least one number (0-9) or symbol
                    </Text>
                  </View>
                  <View style={styles.passwordCriteria}>
                    <AntDesign
                      name={passwordCriteria.doesNotContainEmail ? 'check' : 'close'}
                      size={16}
                      color={
                        passwordCriteria.doesNotContainEmail ? Colors.paleGreen : Colors.jasper
                      }
                    />
                    <Text
                      variant="bodySmall"
                      style={{
                        marginLeft: 5,
                        color: passwordCriteria.doesNotContainEmail
                          ? Colors.paleGreen
                          : Colors.jasper,
                      }}>
                      Does not contain your email address
                    </Text>
                  </View>
                  <View style={styles.passwordCriteria}>
                    <AntDesign
                      name={passwordCriteria.isNotCommonPassword ? 'check' : 'close'}
                      size={16}
                      color={
                        passwordCriteria.isNotCommonPassword ? Colors.paleGreen : Colors.jasper
                      }
                    />
                    <Text
                      variant="bodySmall"
                      style={{
                        marginLeft: 5,
                        color: passwordCriteria.isNotCommonPassword
                          ? Colors.paleGreen
                          : Colors.jasper,
                      }}>
                      Is not a commonly used password
                    </Text>
                  </View>
                </View>
              )}
              <View style={{flexDirection: 'row', marginVertical: 20, maxWidth: 'auto', gap: 5}}>
                <TouchableWithoutFeedback
                  onPress={() => setFieldValue('acceptTexts', !values.acceptTexts)}>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderWidth: 2,
                      marginTop: 5, // Set the border width
                      borderColor: values.acceptTexts ? Colors.paleGreen : Colors.grey,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: values.acceptTexts ? Colors.paleGreen : 'white',
                    }}>
                    {values.acceptTexts && (
                      <AntDesign name="check" size={16} color="white" /> // Check icon
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => setFieldValue('acceptTexts', !values.acceptTexts)}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 19,
                      marginLeft: 4,
                      paddingRight: 20,
                      // letterSpacing: 0.5 ,
                      fontWeight: 400,
                    }}>
                    By clicking this, I agree to the Terms of Services and Privacy Policy
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  maxWidth: 'auto',
                  marginBottom: 30,
                  alignItems: 'center',
                  gap: 5,
                }}>
                <TouchableWithoutFeedback
                  onPress={() => setFieldValue('acceptTexts', !values.acceptTexts)}>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderWidth: 2,
                      // marginTop: 5, // Set the border width
                      borderColor: values.acceptTexts ? Colors.paleGreen : Colors.grey,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: values.acceptTexts ? Colors.paleGreen : 'white',
                    }}>
                    {values.acceptTexts && (
                      <AntDesign name="check" size={16} color="white" /> // Check icon
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => setFieldValue('acceptTexts', !values.acceptTexts)}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 19,
                      marginLeft: 4,
                      paddingRight: 20,
                      // letterSpacing: 0.5 ,
                      fontWeight: 400,
                    }}>
                    Recieve Emails from our Newsletter
                  </Text>
                </TouchableWithoutFeedback>
              </View>

              <CustomButton
                primary
                title="Continue"
                // onPress={() => navigation.navigate('BottosihnmTab')}
                style={styles.createBtn}
                disabled={!isValid}
              />
            </>
          );
        }}
      </Formik>
      <CountryCodeModal
        visible={countryModalVisible}
        close={() => toggleCountryModal()}
        setSelected={setCountry}
      />
      <Loader visible={loading} />
    </>
  );
}
