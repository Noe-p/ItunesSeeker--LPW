import { StyleSheet } from 'react-native';

export const rateModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalInput: {
    fontSize: 30,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 15,
    color: 'black',
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  modalSubmitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: 300,
  },
});
