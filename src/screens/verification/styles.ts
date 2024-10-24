import {Dimensions, StyleSheet} from 'react-native'
import { Colors } from '~config/colors'

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  screen: {
    paddingTop: 76,
    paddingHorizontal: 24,
    // backgroundColor: Colors.seaShell,
    display: 'flex',
    flexDirection:'column',
    // justifyContent: 'center',
    // alignItems:'center',
    
  },
  imgBackground:{
    width: 130,
    height: 60,
    paddingVertical: 80,
    alignSelf: 'center'
  },
 
  fullView: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1,
   
  },
  inputContainer:{
    flexDirection:'row',
   justifyContent: 'space-between',
    alignItems: 'center',
    width:width-48,
    overflow: 'hidden'
   
  },
  resend:{

    width: '100%',
    padding:0
  },
  content: {
    flex: 1,
    paddingTop: 27,
    paddingHorizontal: 24
  },
  headerDesc: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40
  },
  email: {
    fontSize: 16
  },
  cell: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginHorizontal:5,
    marginVertical:68,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Avenir-Bold',
    fontWeight: '600',
    lineHeight: 30,
    fontSize: 20
  },
  btn: {
    marginTop: 64,
    marginBottom: 24
  },
  resendText: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    lineHeight:25,
    fontWeight:400,

  },
  switchMediumText: {
    
    textDecorationLine: 'underline',
  }
  
 
 
})

export default styles