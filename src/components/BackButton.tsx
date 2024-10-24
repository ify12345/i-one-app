import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  btnContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
  btn:{
    width: 14,
    height:14,
  }
})

type Props = {
  onPress: () => void
}

export default function BackButton({onPress}: Props){
  return (
   <TouchableOpacity
    onPress={onPress}
    hitSlop={20}
    style={styles.btnContainer}
  >
    <AntDesign name="arrowleft" size={16} color="black" />   
   </TouchableOpacity>
  )
}



