
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
    padding:36,
    marginVertical:32
  },
  imgBackground2:{
    width:118,
    height:118
  },
  btn:{
    backgroundColor:"#FF7300",
    color:'white',
    width:212,
    
  }
})

export default styles