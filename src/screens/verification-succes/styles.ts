import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

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
  imgContainer: {
    width: 58,
    height: 17,
    resizeMode: 'contain',
    marginBottom: 28,
    alignSelf: 'center',
    marginTop: 58,
    // aspectRatio:1,
  },
  img1: {
    height: '100%',
    width: '100%',
    // borderWidth: 2,
    objectFit: 'contain',
  },
  imgBackground2: {
    width: widthPercentageToDP(80),
    height: 315,
    // borderWidth: 2,
    // paddingVertical: 48,

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
  resendText: {
    textAlign: 'center',
    paddingTop: 68,
    fontSize: 15,
  },
});

export default styles;
