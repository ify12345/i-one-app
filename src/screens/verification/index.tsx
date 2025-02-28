/* eslint-disable react/no-unescaped-entities */
import {
  BackHandler,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import {useTheme, Text} from 'react-native-paper';

import {RootStackScreenProps} from '@/src/types/navigation';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Colors} from '@/src/config/colors';
import CustomButton from '@/src/components/CustomButton';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@/src/redux/store';
import {EmailVerification, PhoneVerification, ResendEmailOtp, ResendPhoneOtp} from '@/src/api/auth';
import Toast from 'react-native-toast-message';
import Loader from '@/src/components/loader';
import styles from './styles';

type Medium = 'email' | 'phone';

const CELL_COUNT = 6;

export default function AccountVerification({
  navigation,
}: RootStackScreenProps<'AccountVerification'>) {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const route = useRoute();
  // const {user} = useAppSelector(store => store.auth);
  // const userRole = user.user?.user_type;
  // console.log(userRole);

  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  function submit() {
    setLoading(true);
    console.log(value);

    dispatch(action)
      .unwrap()
      .then(() => {
        setLoading(false);
        navigation.navigate('AccountVerificationSuccess');
      })
      .catch(err => {
        setLoading(false);
        Toast.show({
          type: 'error',
          props: {message: err?.detail},
        });
      });
  }

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          return true;
        }
        return false;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, []),
  );

  function handleResendCode() {
    setLoading(true);
    dispatch(resendAction)
      .unwrap()
      .then(({message}) => {
        setLoading(false);
        Toast.show({
          type: 'success',
          props: {
            message,
          },
        });
      })
      .catch(err => {
        setLoading(false);
        Toast.show({
          type: 'error',
          props: {
            message: err?.msg,
          },
        });
      });
  }
  return (
    <SafeAreaScreen style={styles.screen}>
      <KeyboardAvoidingView style={styles.fullView} behavior="height">
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View
            style={[
              {
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
              },
            ]}>
            <View style={styles.imgContainer}>
              <ImageBackground
                resizeMode="cover"
                source={require('@/src/assets/images/logo_1.png')}
                style={styles.img1}
              />
            </View>
            <Text variant="titleLarge" style={[{color: 'black'}]}>
              Enter Verification Code
            </Text>
            <Text variant="titleSmall" style={[{textAlign: 'center'}]}>
              A One-Time Password has been sent to
              <Text variant="bodyMedium" style={styles.email}>
                {/* :&nbsp;{currentMedium === 'email' ? user.email : user.phone_number} */}
              </Text>
            </Text>

            <TouchableWithoutFeedback>
              <View style={styles.fullView}>
                <CodeField
                  ref={ref}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <TextInput
                      placeholder=""
                      placeholderTextColor={Colors.charcoal}
                      autoComplete="sms-otp"
                      key={index}
                      style={[
                        styles.cell,
                        {
                          borderWidth: isFocused ? 1 : 0.72,
                          borderColor: isFocused ? colors.primary : 'black',
                          color: Colors.charcoal,
                          backgroundColor: 'white',
                        },
                      ]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </TextInput>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View>
            <CustomButton
              primary
              title="Verify"
              // disabled={!value || value.length < CELL_COUNT}
              onPress={() => navigation.navigate('VerificationSuccess')}
            />
            <TouchableOpacity style={styles.btn} hitSlop={10} onPress={() => navigation.goBack()}>
              <Text variant="bodySmall" style={[styles.resendText, {color: Colors.black}]}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity hitSlop={10} onPress={() => handleResendCode()}>
              <Text variant="bodySmall" style={[styles.resendText, {color: Colors.black}]}>
                Didn't get the code?
                <Text style={{color: Colors.paleGreen}}>&nbsp;Click to resend</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Loader visible={loading} />
    </SafeAreaScreen>
  );
}
