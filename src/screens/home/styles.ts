/* eslint-disable @typescript-eslint/no-unused-vars */

import {Dimensions, StyleSheet} from 'react-native'
import { Colors } from '@/src/config/colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:26,
    paddingHorizontal:30
  },
  cont:{
    color: 'black', marginTop: 7
  },
  search:{
    borderWidth:1,
    paddingHorizontal:21,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:5,
    marginTop:24,
    borderColor: Colors.grey,
    alignItems:'center',
    marginHorizontal:30
  },
  input:{
    backgroundColor:'white',
    borderWidth:0,
    height:41,
  },
  card: {
    width: SCREEN_WIDTH * 0.82,
    height: SCREEN_WIDTH * 0.4,
    borderRadius: 8,
    overflow: 'hidden', 
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  view:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  fixtureCard:{
    paddingVertical:16,
    paddingHorizontal:24,
    gap:5,
    backgroundColor: 'white', // Add a background color if needed
    shadowColor: '#585858', // The color of the shadow
    shadowOffset: { width: 0, height: 2 }, // X and Y offset
    shadowOpacity: 0.25, // Approximate opacity from the hex value (4D = ~30% opacity)
    shadowRadius: 10, // Blur radius
    elevation: 4, // For Android (since shadow properties only work on iOS)
    padding: 10,
    borderRadius: 5,
    marginHorizontal:30,
    marginBottom:14,
    marginTop:10
  },
  versus:{
    flexDirection:'row',
    alignItems:'center',
    gap: 17,
    alignSelf:'center',
    paddingTop: 14
  }
 
})

export default styles