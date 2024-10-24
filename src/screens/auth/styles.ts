import {StyleSheet} from 'react-native';
import {Colors} from '@/src/config/colors';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 76,
    // paddingBottom:39,
    // paddingHorizontal: 24,
    // backgroundColor: '#EEEEEE',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgBackground: {
    width: 130,
    height: 60,
    paddingVertical: 48,
    alignSelf: 'center',
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:'#F5FBF3',
    padding: 2,
    // marginBottom: 48
  },
  fullView: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#EEEEEE',
    paddingTop: 33,
  },
  scrollContent: {
    flexGrow: 1,
  },
  img1: {
    width: 150,
    height: 41,
  },
  container: {
    gap: 2,
    marginBottom: 10,
    paddingHorizontal: 24,
  },
});

export default styles;
