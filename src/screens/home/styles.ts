
import {StyleSheet} from 'react-native'
import { Colors } from '@/src/config/colors'


const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'#F4F4F4',
    paddingHorizontal:24
  },
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:24
  },
  imgBackground: {
    width: 200,
    height: 40,
    alignSelf: 'center',

  },
  service:{
    backgroundColor:'white',
    borderRadius:5,
    gap:18,
    justifyContent:'center',
    alignItems:'center',
    padding:36,
    marginVertical:32
  },
  imgBackground2:{
    width:118,
    height:118
  },
  btn:{
    backgroundColor:"#FF7300",
    color:'white',
    width:212,
    
  },


  img: {
    resizeMode: 'contain',
  },
  serviceList: {
    padding: 16,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 8,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  serviceFee: {
    fontSize: 14,
    color: '#6c757d',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyImage: {
    width: 200,
    height: 200,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6c757d',
  },
})

export default styles