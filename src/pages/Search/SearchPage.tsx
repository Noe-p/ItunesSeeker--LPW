import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SearchInput, SongCard, SongDetail } from '../../components';
import { fetchSongs } from '../../service/itunesApi';
import { searchPageStyle } from './searchPageStyle';

const SongListApi = () => {
  const [text, setText] = useState('');
  const [SongList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchSongs(text);
      setSongList(res);
    };
    fetchData();
  }, [text]);

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
        data={SongList}
        renderItem={({ item }) => (
          <SongCard
            goBack={'SongListApi'}
            stack={'SongDetailApi'}
            song={item}
          />
        )}
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
      initialRouteName='SongListApi'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SongListApi' component={SongListApi} />
      <Stack.Screen name='SongDetailApi' component={SongDetail} />
    </Stack.Navigator>
  );
}
