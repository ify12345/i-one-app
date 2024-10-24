import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 160,
  },
  imgBackground: {
    width: 130,
    height: 50,
    alignSelf: 'center',
  },
  imgBackground2: {
    width: 245,
    height: 315,
    paddingVertical: 48,
    
    alignSelf: 'center',
  },
  bigText: {
    textAlign: 'center',
    color: 'black',
    paddingTop: 68,
    // paddingBottom: 16,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: 'Nunito_600SemiBold',
    lineHeight: 36,
    letterSpacing: 1,
  },
  smallText: {
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
  },
  svg: {
    width: 153,
    height: 153,
  },
  resendText:{
    textAlign:'center',
    paddingTop: 68,
    fontSize: 15
  }
});

export default styles;
