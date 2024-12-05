import {ScrollView, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React, {useEffect} from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import CustomButton from '@/src/components/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '@/src/config/colors';
import {useNavigation} from '@react-navigation/native';
import {persistor, useAppDispatch, useAppSelector} from '@/src/redux/store';
import {logout} from '@/src/redux/reducers/auth';
import {getProfile} from '@/src/api/auth';
import styles from './styles';

export default function AccountScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const {profile} = useAppSelector(state => state.auth);

  console.log('info', profile);

  function signOut(payload) {
    dispatch(logout(payload));
    dispatch(logout());
    persistor.purge();
  }
  return (
    <SafeAreaScreen style={styles.screen}>
      <ScrollView>
        <Text variant="titleLarge" style={{color: 'black'}}>
          My Profile
        </Text>
        <View style={styles.service}>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text variant="titleLarge" style={{color: 'black'}}>
              Basic Info
            </Text>
            <CustomButton
              onPress={() => navigation.navigate('EditBasicInfo')}
              primary
              style={styles.btn1}
              title="Edit"
              titleStyle={{color: 'white'}}
            />
          </View>
          <View>
            <Text variant="titleMedium" style={{color: 'black'}}>
              Last Name
            </Text>
            <Text>{profile?.last_name}</Text>
          </View>
          <View>
            <Text variant="titleMedium" style={{color: 'black'}}>
              First Name
            </Text>
            <Text>{profile?.first_name}</Text>
          </View>
          <View>
            <Text variant="titleMedium" style={{color: 'black'}}>
              Phone
            </Text>
            <Text>{profile?.phone_number}</Text>
          </View>
        </View>

        <View style={styles.service2}>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text variant="titleMedium" style={{color: 'black'}}>
              Other Info
            </Text>
            <CustomButton primary style={styles.btn1} title="Edit" titleStyle={{color: 'white'}} />
          </View>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', marginTop: 4}}>
              Personal Information has not been supplied. Click
              <Text style={{color: Colors.paleGreen}}> here </Text>to add personal information.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.service2}>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text variant="titleMedium" style={{color: 'black'}}>
              Institutional Info
            </Text>
            <CustomButton primary style={styles.btn1} title="Edit" titleStyle={{color: 'white'}} />
          </View>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', marginTop: 4}}>
              Institution Information has not been supplied.
              <Text style={{color: Colors.paleGreen}}> here </Text>Click to add one.
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.link} onPress={() => signOut()}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Text variant="labelSmall" style={{color: colors.error}}>
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaScreen>
  );
}
