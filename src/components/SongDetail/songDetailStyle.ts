import { StyleSheet } from 'react-native';

export const detailPageStyle = StyleSheet.create({
  detailPageContainer: {
    backgroundColor: '#191414',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 50,
    minHeight: '100%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%',
    marginVertical: 20,
  },
  songInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailImage: {
    width: 330,
    height: 330,
  },
  detailNameSongContainer: {
    marginTop: 10,
    width: 330,
  },
  detailSongTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 27,
  },
  detailSongArtist: {
    color: 'grey',
    fontSize: 16,
  },
});
