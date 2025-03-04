/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import {StyleSheet} from 'react-native';
import { Colors } from '@/src/config/colors';

const styles = StyleSheet.create({
  screen: {
    // paddingHorizontal: 35,
  },
  versus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
    alignSelf: 'center',
    paddingTop: 14,
    paddingHorizontal: 35
  },
  navigation:{
    paddingTop:21,
    paddingBottom:21,
    paddingHorizontal:35,
    flexDirection:'row',
    gap:17,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: '#EDEDED',
    marginTop:36
  },
  navText:{
    color: '#B9B9B9'
  }
});

export default styles;
