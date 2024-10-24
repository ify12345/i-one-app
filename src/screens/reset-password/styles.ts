import {StyleSheet} from 'react-native';
import {Colors} from '@/src/config/colors';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 54,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    flex:1
  },
  imgBackground: {
    width: 130,
    height: 50,
    alignSelf: 'center',
  },
  imgBackground2: {
    width: 253,
    height: 352,
    paddingVertical: 48,
    
    alignSelf: 'center',
  },

  btnContainer: {
    paddingTop: 105,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: '100%',
    paddingHorizontal: 21,
  },
  loginBtn: {
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  createBtn: {
    justifyContent: 'center',
    // borderColor: 'black',
    // borderRadius: 30,
    height: 48,
    marginTop: 16,
  },
  title: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  loginText: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  fullView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  toggleBtn: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'auto',
    paddingHorizontal: 17,
    color: 'black',
  },
  activeToggleBtn: {
    backgroundColor: '#F0F1F2',
  },
});

export default styles;
