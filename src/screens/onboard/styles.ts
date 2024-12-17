import {StyleSheet} from 'react-native';
import {Colors} from '@/src/config/colors';

const styles = StyleSheet.create({
  screen: {
    paddingBottom:24
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
    height: 44,
    width: 154,
    alignSelf:'center'
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
    borderColor:'#5C5C5C57',
    borderWidth:1
  },
});

export default styles;
