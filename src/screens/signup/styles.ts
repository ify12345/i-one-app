import {StyleSheet} from 'react-native'
import { Colors } from '@/src/config/colors'

const styles = StyleSheet.create({
  screen: {
    paddingTop: 54,
    backgroundColor: Colors.seaShell,
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    
  },
  imgBackground: {
    width: 179,
    height: 83,
    marginBottom: 207
  },
  fullView: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1,
  },
  btnContainer:{
    paddingTop: 105,
    display: 'flex',
    flexDirection:'column',
    gap: 24,
    width: '100%',
    paddingHorizontal: 21
  },
  loginBtn: {
    justifyContent:'center',
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    height: 48
  },
  createBtn: {
    justifyContent:'center',
    borderColor: 'black',
    // borderRadius: 30,
    height: 48,
    alignSelf:'flex-end'
  },
  title:{
    color: 'black',
      display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular'
  },
  loginText:{
    fontSize: 15,
    lineHeight: 15,
    textAlign:'center',
    marginTop: 30
  },
  passwordCriteria: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  criteriaContainer: {
    borderRadius: 5,
  },
  criteriaText:{
    color:'black',
    marginBottom: 8
  }
})

export default styles