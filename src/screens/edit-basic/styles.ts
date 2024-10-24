import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'space-between',
    height: '100%',
  },
  fullView: {
    flex: 1,
    
  },
  scrollContent: {
    height: '100%',
    flex: 1,
    // justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop:50
  },
  input: {
    marginVertical: 12,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  createBtn: {
    // marginLeft: 12,
    width: 136,
    flex: 1,
  },
  createBtn1: {
    flex: 1,
    width: 136,
  },
});

export default styles;
