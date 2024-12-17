import { ImageBackground, StyleSheet,TouchableOpacity,View } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import SearchSvg from '../assets/svg/searchSvg'


const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:24
      },
      imgBackground: {
        width: 200,
        height: 40,
        alignSelf: 'center',
    
      },
      img:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
      }
})

export default function TopBar() {
    const navigation = useNavigation()
  return (
    <View style={styles.top}>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <SearchSvg />
        </TouchableOpacity>
    <ImageBackground
      source={require('@/src/assets/images/logo_1.png')}
      style={styles.imgBackground}
      imageStyle={styles.img}
    />
     <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>

    <Fontisto name="bell" size={24} color="black" />
     </TouchableOpacity>
  </View>
  )
}



