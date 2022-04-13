import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { songDetailSelector } from '../redux/songDetailSlice';
import { SongType } from '../types';
import { detailPageStyle } from './songDetailStyle';

export const SongDetail = () => {
  const navigation = useNavigation();
  const song: SongType = useSelector(songDetailSelector).songDetail;

  return (
    <ScrollView>
      <View style={detailPageStyle.detailPageContainer}>
        <View style={detailPageStyle.topBar}>
          <Pressable onPress={() => navigation.navigate('SongList')}>
            <Ionicons name={'chevron-back-outline'} color={'white'} size={30} />
          </Pressable>
          <Text style={{ color: 'white' }}>{song.artist}</Text>
          <Ionicons
            name={'ellipsis-horizontal-outline'}
            color={'white'}
            size={30}
          />
        </View>

        <View style={detailPageStyle.songInfoContainer}>
          <Image
            source={{ uri: song.cover }}
            style={detailPageStyle.detailImage}
          />
          <View style={detailPageStyle.detailNameSongContainer}>
            <Text style={detailPageStyle.detailSongTitle}>
              {song.title} - {song.album}
            </Text>
            <Text style={detailPageStyle.detailSongArtist}>{song.artist}</Text>
          </View>
        </View>
        <Pressable style={detailPageStyle.buttonAddSong}>
          <Text style={detailPageStyle.textButtonAddSong}>Ajouter</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
