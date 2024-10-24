import React, {useState} from 'react';
import {View, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import CustomButton from '@/src/components/CustomButton';
import Loader from '@/src/components/loader';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

export default function EditBasicInfo() {
  const {colors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleContinue() {
    navigation.goBack();
  }

  function submit() {
    // Handle submission logic here
    console.log({firstName, lastName, email});
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  }

  return (
    <SafeAreaScreen style={styles.screen}>
      <Text variant="titleLarge" style={{color:'black'}}>Basic Info</Text>

      <View style={styles.scrollContent}>
        {/* First Name Input with Title */}
        <Text variant="titleSmall" style={styles.inputLabel}>
          First Name
        </Text>
        <TextInput
          style={[styles.input, {backgroundColor: colors.background}]}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        {/* Last Name Input with Title */}
        <Text variant="titleSmall" style={styles.inputLabel}>
          Last Name
        </Text>
        <TextInput
          style={[styles.input, {backgroundColor: colors.background}]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Email Input with Title */}
        <Text variant="titleSmall" style={styles.inputLabel}>
          Email Address
        </Text>
        <TextInput
          style={[styles.input, {backgroundColor: colors.background}]}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 24, gap: 8}}>
        <CustomButton
          primary
          title="Update"
          onPress={submit}
          style={styles.createBtn}
          disabled={loading || !firstName || !lastName || !email} // Disable button if any field is empty
        />
        <CustomButton title="Cancel" onPress={handleContinue} style={styles.createBtn1} />
      </View>

      <Loader visible={loading} />
    </SafeAreaScreen>
  );
}
