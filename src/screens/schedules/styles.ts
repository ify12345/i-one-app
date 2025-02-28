import {Dimensions, StyleSheet} from 'react-native';


const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 24,
  },

  service: {
    backgroundColor: 'white',
    borderRadius: 5,
    gap: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 36,
    marginVertical: 32,
    flex: 1,
  },
  imgBackground2: {
    width: 60,
    height: 60,
  },
  btn: {
    backgroundColor: '#FF7300',
    color: 'white',
    width: 212,
  },
  serviceList: {
    // paddingHorizontal: 16,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  serviceItem: {
    width: (screenWidth - 48) / 2 - 12,
    // aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // height: screenHeight * 0.15,
    alignSelf: 'center',
    padding: 24,
    gap: 3,

  },
  serviceIcon: {
    width: 60,
    height: 60,
    resizeMode:'contain',
    borderRadius: 8,
   
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign:'center'
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
});

export default styles;
