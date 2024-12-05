
import {StyleSheet} from 'react-native'
import { Colors } from '@/src/config/colors'


const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'#F4F4F4',
    paddingHorizontal:24
  },
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  imgBackground: {
    width: 200,
    height: 40,
    alignSelf: 'center',

  },
  service:{
    backgroundColor:'white',
    borderRadius:5,
    gap:18,
    padding:36,
    marginVertical:12,
  
  },
  service2:{
    backgroundColor:'white',
    borderRadius:5,
    gap:18,
    padding:16,
    marginVertical:12,
  
  },
  imgBackground2:{
    width:60,
    height:60
  },
  btn1:{
    width:76
  },
  btn:{
    backgroundColor:"#FF7300",
    color:'white',
    width:122,
    
  },
  link:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center'
  },
})

export default styles