import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { songDetailSelector } from '../../redux/songDetailSlice';
import { addSong, removeSong, songSelector } from '../../redux/songSlice';
import { SongType } from '../../types';
import { SubmitButton } from '../Buttons';
import { RateModal } from '../Modal';
import { Rate } from '../Rate';
import { detailPageStyle } from './songDetailStyle';

export const SongDetail = () => {
  const navigation = useNavigation();
  const song: SongType = useSelector(songDetailSelector).songDetail;
  const songListUser: SongType[] = useSelector(songSelector).song;
  const dispatch = useDispatch();
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [rateValue, setRateValue] = useState(song.rate);

  const ToggleSongToList = () => {
    songListUser.length > 0
      ? dispatch(removeSong(song))
      : dispatch(addSong({ song: song, rate: rateValue }));

    route.params.goBack == 'SongListUser'
      ? navigation.navigate('SongListUser')
      : navigation.navigate('SongListApi');
  };

  return (
    <ScrollView>
      <View style={detailPageStyle.detailPageContainer}>
        <RateModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          song={song}
          rateValue={rateValue}
          setRateValue={setRateValue}
        />
        <View style={detailPageStyle.topBar}>
          <Pressable onPress={() => navigation.navigate(route?.params.goBack)}>
            <Ionicons name={'chevron-back-outline'} color={'white'} size={30} />
          </Pressable>
          <Text style={{ color: 'white' }}>{song.artist}</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name={'star-outline'} color={'white'} size={30} />
          </Pressable>
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
            {rateValue == 0 ? <></> : <Rate rateNumber={rateValue} />}
          </View>
        </View>
        <SubmitButton
          onPress={ToggleSongToList}
          content={songListUser.length > 0 ? 'Supprimer' : 'Ajouter'}
          color='#1DB954'
        />
      </View>
    </ScrollView>
  );
};
