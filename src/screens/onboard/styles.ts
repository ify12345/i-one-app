/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {Colors} from '@/src/config/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  screen: {
    paddingBottom:24,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  imgContainer: {
    width: 100,
    height: 29,
    resizeMode:'contain',
    // aspectRatio:1,
    alignSelf:'center',
    marginTop: 93
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    resizeMode:'contain',
    // aspectRatio:1,
    alignSelf:'center'
  },
  img: {
    borderRadius: 16,
  },
  img1: {
    height: '100%',
    width: '100%',
    alignSelf:'center',
    // borderWidth: 2,
    objectFit:'cover'
  },
  imgOverlay: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal:24
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 18,

  },
  indicator: {
    width: 16,
    height: 2,
    borderRadius: 8,
    marginRight: 4,
  },
  activeIndicator: {
    width: 16,
    height: 2,
    borderRadius: 8,
    marginRight: 4,
  },
  inActiveIndicator: {
    width: 4,
    height: 4,
    borderRadius: 120,
    marginRight: 4,
  },
  loginBtn: {
    borderColor: Colors.black,
    borderWidth:2.5
  },
});

export default styles;
