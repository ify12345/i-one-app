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
  import React, {useState} from 'react';
  import SafeAreaScreen from '@/src/components/SafeAreaScreen';
  import {useTheme, Text} from 'react-native-paper';
  import CustomButton from '~components/CustomButton';
  import {Formik} from 'formik';
  import {useTranslation} from 'react-i18next';
  import {useNavigation} from '@react-navigation/native';
  import {RootStackScreenProps} from '~types/navigation';
  import {Colors} from '~config/colors';
  import {useSafeAreaInsets} from 'react-native-safe-area-context';
  import InputField from '~components/InputField';
  import {useAppDispatch} from '~redux/store';
  import Toast from 'react-native-toast-message';
  import CountryCodeData from '~mocks/country-codes';
  import CountryCodeModal from '~components/modals/CountryCodeModal';
  import {Country} from '~types';
  import {login} from '~api/auth';
  import Loader from '~components/loader';
  import styles from './styles';
  
  const {width} = Dimensions.get('screen');
  
  type FormValues = {
    email_or_phone: string;
    email_or_phones: string;
    password: string;
  };
  
  type LoginPayload = {
    email_or_phone: string;
    email_or_phones: string;
    password: string;
  };
  
  export default function Login() {
    const {colors} = useTheme();
    const {top, bottom} = useSafeAreaInsets();
    const {t} = useTranslation('onboarding');
    const navigation = useNavigation<RootStackScreenProps<'Onboard'>['navigation']>();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const [isPhoneLogin, setIsPhoneLogin] = useState(false);
    const [countryModalVisible, setCountryModalVisible] = useState(false);
    const [country, setCountry] = useState<Country>(CountryCodeData[0]);
  
    function toggleCountryModal() {
      setCountryModalVisible(!countryModalVisible);
    }
  
    function handleContinue() {
      navigation.navigate('Authentication', {screen: 'Register'});
    }
  
    function submit({email_or_phones, password}: LoginPayload) {
      const payload: LoginPayload = {
        email_or_phone: isPhoneLogin
          ? `${country.countryDialCode}${email_or_phones}`
          : email_or_phones,
        password,
      };
      console.log(payload);
      setLoading(true);
      dispatch(login(payload))
        .unwrap()
        .then(response => {
          setLoading(false);
          console.log('login:', payload);
          Toast.show({
            type: 'success',
            props: {message: response.message},
          });
          navigation.navigate('HomeTab');
        })
        .catch(err => {
          setLoading(false);
          Toast.show({
            type: 'error',
            props: {message: err?.detail},
          });
        });
    }
  
    const loginValidationSchema = yup.object().shape({
      email_or_phones: isPhoneLogin
        ? yup.string().required(t('Phone number is required'))
        : yup.string().email(t('Enter a valid email')).required(t('Email is required')),
      password: yup
        .string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?:(?=.*\d)|(?=.*[\W_]))(?!.*\s).{8,}$/,
          t('Enter a valid password'),
        )
        .required(t('required_password', {ns: 'login'})),
    });
  
    return (
      <KeyboardAvoidingView style={styles.fullView} behavior="height">
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}>

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email_or_phone: '', password: ''}}
            onSubmit={values => submit(values)}>
            {({touched, handleChange, handleSubmit, errors, isValid, values}) => (
              <>
              
                  <InputField
                    required
                    label="Email"
                    keyboardType="email-address"
                    error={touched.email_or_phones && errors.email_or_phones}
                    errorMessage={errors.email_or_phones}
                    onChangeText={handleChange('email_or_phones')}
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
                    variant="labelSmall"
                    style={[{color: Colors.paleGreen, alignSelf: 'flex-end'}]}>
                    {t('Forgot password', {ns: 'login'})}
                  </Text>
                </TouchableWithoutFeedback>
                <CustomButton
                  primary
                  title="Continue"
                  onPress={() => navigation.navigate('BottomTab')}
                  style={styles.createBtn}
                  disabled={!isValid}
                />
  
              </>
            )}
          </Formik>
          <CountryCodeModal
            visible={countryModalVisible}
            close={() => toggleCountryModal()}
            setSelected={setCountry}
          />
        </ScrollView>
        <Loader visible={loading} />
      </KeyboardAvoidingView>
    );
  }
  