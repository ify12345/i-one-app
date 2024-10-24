import {ImageBackground, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomButton from '@/src/components/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/src/config/colors';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export default function AccountScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaScreen style={styles.screen}>
      <ScrollView>
        <Text variant='titleLarge' style={{color:'black'}}>My Profile</Text>
        <View style={styles.service}>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text variant='titleLarge' style={{color:'black'}}>Basic Info</Text>
            <CustomButton onPress={()=>navigation.navigate('EditBasicInfo')} primary style={styles.btn1} title="Edit" titleStyle={{color: 'white'}} />
          </View>
          <View>
            <Text variant='titleMedium' style={{color:'black'}}>Last Name</Text>
            <Text>John</Text>
          </View>
          <View>
            <Text variant='titleMedium' style={{color:'black'}}>First Name</Text>
            <Text>John</Text>
          </View>
          <View>
            <Text variant='titleMedium' style={{color:'black'}}>Last Name</Text>
            <Text>abcdef***123456@gmail.com</Text>
          </View>
        </View>

        <View style={styles.service2}>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text variant='titleMedium' style={{color:'black'}}>Other Info</Text>
            <CustomButton primary style={styles.btn1} title="Edit" titleStyle={{color: 'white'}} />
          </View>
          <TouchableOpacity>
            <Text style={{textAlign:"center",marginTop:4}}>FPersonal Information has not been supplied. Click 
              <Text style={{color:Colors.paleGreen,}}> here </Text>to add personal information.</Text>
              </TouchableOpacity>
        </View>

        <View style={styles.service2}>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text variant='titleMedium' style={{color:'black'}}>Institutional Info</Text>
            <CustomButton primary style={styles.btn1} title="Edit" titleStyle={{color: 'white'}} />
          </View>
          <TouchableOpacity>
            <Text style={{textAlign:"center",marginTop:4}}>Institution Information has not been supplied. 
              <Text style={{color:Colors.paleGreen,}}> here </Text>Click to add one.</Text>
              </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaScreen>
  );
}
