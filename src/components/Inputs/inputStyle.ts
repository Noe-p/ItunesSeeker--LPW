import { StyleSheet } from 'react-native';

export const inputStyle = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 20,
  },
  input: {
    fontSize: 16,
    color: '#191414',
    flex: 1,
    paddingLeft: 5,
    height: 30,
    width: '100%',
  },
  icon: {
    height: 30,
  },
});
