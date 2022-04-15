import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { songDetailSelector } from '../../redux/songDetailSlice';
import { SongType } from '../../types';
import { rateStyle } from './rateStyle';

export const Rate = () => {
  const song: SongType = useSelector(songDetailSelector).songDetail;

  const rateRender = () => {
    const array = [];
    let name = 'star';
    for (let i = 0; i < 5; i++) {
      if (i >= song.rate) {
        name = 'star-outline';
      }
      array.push(
        <Ionicons
          name={name}
          size={30}
          color={'#1DB954'}
          style={{ paddingHorizontal: 2 }}
        />
      );
    }
    return array;
  };
  return (
    <View style={rateStyle.detailSongRate}>
      {rateRender().map((ele) => ele)}
    </View>
  );
};
