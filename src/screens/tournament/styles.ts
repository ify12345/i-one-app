/* eslint-disable import/extensions */

import {StyleSheet} from 'react-native'
import { Colors } from '@/src/config/colors'


const styles = StyleSheet.create({
  screen:{
    flex:1, 
    paddingHorizontal:34,
  },
  topNav:{
   
    paddingVertical:21
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#7D7D7D',
   
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.grey,
  },
  plusButton: {
    padding: 8,
  },
  top:{
   
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1
  },
  polygon: {
     height:25,
     width:25,
     marginHorizontal: 18,
     backgroundColor: Colors.paleGreen,
     justifyContent: 'center',
     alignItems: 'center',
     transform: [{rotate: '45deg'}],
     flexDirection:'row'
   },
   dateText: {
     fontSize: 7,
     fontWeight: 'bold',
     color: Colors.black,
     transform: [{rotate: '-45deg'}],
     textAlign:'center',
    paddingBottom: 30
   },
})

export default styles