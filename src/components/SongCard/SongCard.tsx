import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { songDetail } from '../../redux/songDetailSlice';
import { SongType } from '../../types';
import { songCardStyle } from './songCardStyle';

interface SongCardProps {
  song: SongType;
  stack: string;
  goBack: string;
}
export const SongCard = (props: SongCardProps) => {
  const { song, stack, goBack } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSongClick = () => {
    navigation.navigate(stack, { goBack: goBack });
    dispatch(songDetail(song));
  };

  return (
    <Pressable style={songCardStyle.songCard} onPress={() => onSongClick()}>
      <Image style={songCardStyle.imageCover} source={{ uri: song.cover }} />
      <View style={songCardStyle.containerTextSongCard}>
        <Text style={songCardStyle.SongCardTitle}>{song.title}</Text>
        <Text style={songCardStyle.songCardInfos}>
          {song.artist} - {song.album}
        </Text>
      </View>
      <Ionicons
        name={'chevron-forward-outline'}
        style={songCardStyle.chevron}
        size={30}
      />
    </Pressable>
  );
};
