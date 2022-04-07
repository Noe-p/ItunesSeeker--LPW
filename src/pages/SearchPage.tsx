import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SearchInput } from '../components';
import searchStyles from '../styles/pages/search.scss';
import { SongType } from '../Types';

export function SearchPage(): JSX.Element {
  const [text, setText] = useState('');

  const SongFixture: SongType[] = [
    {
      id: '1',
      title: 'Test',
      artist: 'John',
      album: 'Test',
      cover: 'ratm.jpg',
    },
    {
      id: '2',
      title: 'Test2',
      artist: 'John2',
      album: 'Test2',
      cover: 'ratm.jpg',
    },
    {
      id: '3',
      title: 'Test3',
      artist: 'John3',
      album: 'Test3',
      cover: 'ratm.jpg',
    },
    {
      id: '4',
      title: 'Test4',
      artist: 'John4',
      album: 'Test4',
      cover: 'ratm.jpg',
    },
  ];

  const SongCard = ({ item }) => (
    <View style={searchStyles.songCard}>
      <Image
        style={searchStyles.imageCover}
        source={require('../../assets/cover/ratm.jpg')}
      />
      <View style={searchStyles.containerTextSongCard}>
        <Text style={searchStyles.SongCardTitle}>{item.title}</Text>
        <Text style={searchStyles.songCardInfos}>
          {item.artist} - {item.album}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={searchStyles.container}>
      <Text style={searchStyles.title}>{'Rechercher'}</Text>
      <SearchInput
        value={text}
        onChangeText={setText}
        style={searchStyles.searchInput}
        placeholder={'Artistes, titres ou podcasts'}
      />
      <FlatList
        data={SongFixture}
        renderItem={SongCard}
        keyExtractor={(item) => item.id}
        style={{ width: '95%' }}
      />
    </View>
  );
}
