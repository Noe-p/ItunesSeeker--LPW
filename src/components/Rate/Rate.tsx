import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { rateStyle } from './rateStyle';

export interface RateProps {
  rateNumber: number;
}

export const Rate = (props: RateProps) => {
  const { rateNumber } = props;

  const rateRender = () => {
    const array = [];
    let name = 'star';
    for (let i = 0; i < 5; i++) {
      if (i >= rateNumber) {
        name = 'star-outline';
      }
      array.push(
        <Ionicons
          key={i}
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
