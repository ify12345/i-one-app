
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
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:36,
    marginVertical:32,
  
  },
  imgBackground2:{
    width:60,
    height:60
  },
  btn:{
    backgroundColor:"#FF7300",
    color:'white',
    width:122,
    
  }
})

export default styles