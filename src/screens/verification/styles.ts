/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Dimensions, StyleSheet} from 'react-native'


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
  scrollContent:{
    flex:1,
    justifyContent:'space-between',
    paddingBottom:36
  },
  imgBackground:{
    width: 130,
    height: 60,
    paddingVertical: 80,
    alignSelf: 'center'
  },
  imgContainer: {
    width: 58,
    height: 17,
    resizeMode:'contain',
    marginBottom:28,
    alignSelf:'center',
    marginTop:58
    // aspectRatio:1,
  },
  img1: {
    height: '100%',
    width: '100%',
    // borderWidth: 2,
    objectFit:'contain'
  },
  fullView: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-between'
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
    marginVertical:24,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Avenir-Bold',
    fontWeight: '600',
    lineHeight: 30,
    fontSize: 20
  },
  btn: {
    marginTop: 12,
    marginBottom: 24,
    borderWidth: 0.3,
    height: 52,
    justifyContent:'center',
    borderRadius:8
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