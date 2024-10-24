import {StyleSheet} from 'react-native';
import {Colors} from '@/src/config/colors';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 54,
    flex:1,
    justifyContent:'space-between',
    gap:5
    
  },
  imgBackground: {
    width: '100%',
    height: 249,
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
    gap: 20,
    paddingHorizontal:24
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 28,
    marginBottom: 25,
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
