import { StyleSheet } from 'react-native';

export const songCardStyle = StyleSheet.create({
  songCard: {
    width: '100%',
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageCover: {
    width: 50,
    height: 50,
  },
  containerTextSongCard: {
    flex: 1,
    paddingLeft: 10,
  },
  SongCardTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  songCardInfos: {
    color: 'grey',
    fontSize: 13,
  },
  chevron: {
    color: 'grey',
  },
});
