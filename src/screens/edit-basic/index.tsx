import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import CustomButton from '@/src/components/CustomButton';
import Loader from '@/src/components/loader';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '@/src/redux/store';
import { getProfile, UpdateProfile } from '@/src/api/auth';
import styles from './styles';
import Toast from 'react-native-toast-message';

export default function EditBasicInfo() {
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const { profile } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  // Initialize state with placeholders from profile
  const [firstName, setFirstName] = useState(profile?.first_name || '');
  const [lastName, setLastName] = useState(profile?.last_name || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [dateOfBirth, setDateOfBirth] = useState(profile?.dateof_birth || '');
  const [passportNumber, setPassportNumber] = useState(profile?.passport_number || '');
  const [nationalityId, setNationalityId] = useState(profile?.nationality_id?.toString() || '');
  const [phoneNumber, setPhoneNumber] = useState(profile?.phone_number?.toString() || '');
  const [genderId, setGenderId] = useState(profile?.gender_id?.toString() || '');

  const [loading, setLoading] = useState(false);

  function handleCancel() {
    navigation.goBack();
  }

  async function submit() {
    const updatedProfile = {
      first_name: firstName,
      last_name: lastName,
  
      dateof_birth: dateOfBirth,
      passport_number: passportNumber,
      nationality_id: Number(nationalityId), // Convert to number
      phone_number: phoneNumber,
      gender_id: Number(genderId), // Convert to number
    };

    console.log('Submitting updated profile:', updatedProfile);
    setLoading(true);

    try {
      await dispatch(UpdateProfile(updatedProfile)).unwrap();
      Toast.show({
        type: 'success',
        props: { message: 'Profile Update successful' },
      });

      navigation.goBack();
    } catch (error) {
      console.error('Update failed:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaScreen style={styles.screen}>
      <Text variant="titleLarge" style={{ color: 'black' }}>
        Edit Basic Info
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* First Name */}
        <Text variant="titleSmall" style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        {/* Last Name */}
        <Text variant="titleSmall" style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Email */}
        {/* <Text variant="titleSmall" style={styles.inputLabel}>Email</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        /> */}

        {/* Date of Birth */}
        <Text variant="titleSmall" style={styles.inputLabel}>Date of Birth</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="YYYY/MM/DD"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />

        {/* Passport Number */}
        <Text variant="titleSmall" style={styles.inputLabel}>Passport Number</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="Passport Number"
          value={passportNumber}
          onChangeText={setPassportNumber}
        />

        {/* Nationality */}
        <Text variant="titleSmall" style={styles.inputLabel}>Nationality ID</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="Nationality ID"
          value={nationalityId}
          onChangeText={setNationalityId}
          keyboardType="numeric"
        />

        {/* Phone Number */}
        <Text variant="titleSmall" style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        {/* Gender */}
        <Text variant="titleSmall" style={styles.inputLabel}>Gender (1: Female, 2: Male)</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.background }]}
          placeholder="Gender ID"
          value={genderId}
          onChangeText={setGenderId}
          keyboardType="numeric"
        />
        <CustomButton
          primary
          title="Update"
          onPress={submit}
          style={styles.createBtn}
        />
        <CustomButton title="Cancel" onPress={handleCancel} style={styles.createBtn1} />
      </ScrollView>
     
     


      <Loader visible={loading} />
    </SafeAreaScreen>
  );
}
