/* eslint-disable @typescript-eslint/no-unused-vars */
import { Colors } from '@/src/config/colors';
import {Dimensions, StyleSheet} from 'react-native';


const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 24,
  },
  topNav:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:44
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#7D7D7D',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.grey,
  },
  plusButton: {
    padding: 8,
  },
  filter:{
    paddingVertical:9,
    paddingHorizontal:18,
    borderRadius: 3,
    backgroundColor: Colors.grey,

  },
  buttons:{
    flexDirection:'row',
    gap:6,
    marginBottom: 33
  },
  listContainer:{
    flexDirection:'column',
    gap:12,
  },
  view:{
    borderWidth:1,
    borderColor: Colors.grey,
    backgroundColor: 'white', // Add a background color if needed
    shadowColor: '#939393', // The color of the shadow
    shadowOffset: { width: 0, height: 2 }, // X and Y offset
    shadowOpacity: 0.25, // Approximate opacity from the hex value (4D = ~30% opacity)
    shadowRadius: 8, // Blur radius
    elevation: 4, // For Android (since shadow properties only work on iOS)
    borderRadius: 5,
    borderBottomWidth:1,
   
  },
  top:{
 
    flexDirection:'row',
    alignItems:'center'
  },
  polygon: {
     height:25,
     width:25,
     marginHorizontal: 18,
     backgroundColor: Colors.paleGreen,
     justifyContent: 'center',
     alignItems: 'center',
     transform: [{rotate: '45deg'}],
     flexDirection:'row'
   },
   dateText: {
     fontSize: 7,
     fontWeight: 'bold',
     color: Colors.black,
     transform: [{rotate: '-45deg'}],
     textAlign:'center',
    paddingBottom: 30
   },
   score:{
    borderBottomWidth:1,
    borderBottomColor: Colors.grey,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    paddingVertical:13,
    borderTopWidth:1,
    borderTopColor: Colors.grey

   }

});

export default styles;
