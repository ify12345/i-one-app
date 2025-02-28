import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackArrow from '../assets/svg/BackArrow';


const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    width: 14,
    height:14,
  }
})


export default function BackButton(){
  const navigation =  useNavigation();

  return (
   <TouchableOpacity
    onPress={()=>navigation.goBack()}
    hitSlop={20}
    style={styles.btnContainer}
  >
    <BackArrow/>  
   </TouchableOpacity>
  )
}



