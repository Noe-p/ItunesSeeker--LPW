import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SearchInput, SongCard } from '../components';
import { SongDetail } from '../components/SongDetail';
import { fetchSongs } from '../service/itunesApi';
import { searchPageStyle } from './searchPageStyle';

const SongList = () => {
  const [text, setText] = useState('');
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchSongs(text);
      setSongList(res);
    };
    fetchData();
  });

  return (
    <View style={searchPageStyle.container}>
      <Text style={searchPageStyle.title}>{'Rechercher'}</Text>
      <SearchInput
        value={text}
        onChangeText={setText}
        style={searchPageStyle.searchInput}
        placeholder={'Artistes, titres ou podcasts'}
      />
      <FlatList
        data={songList}
        renderItem={({ item }) => <SongCard {...item} />}
        keyExtractor={(item) => item.id}
        style={{
          width: '100%',
          marginBottom: 10,
          height: 700,
          paddingHorizontal: '2.5%',
        }}
      />
    </View>
  );
};

export function SearchPage(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SongList' component={SongList} />
      <Stack.Screen name='SongDetail' component={SongDetail} />
    </Stack.Navigator>
  );
}
