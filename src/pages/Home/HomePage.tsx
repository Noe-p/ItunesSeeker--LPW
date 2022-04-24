import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { FilterButton, SongCard, SongDetail } from '../../components';
import { songSelector } from '../../redux/songSlice';
import { SongType } from '../../types';
import { homePageStyle } from './homePageStyle';

const SongListUser = () => {
  const [filterSelected, setFilterSelected] = useState('music');
  const songList: SongType[] = useSelector(songSelector).song;

  const filterList = (list: SongType[]): SongType[] => {
    const listTemp = [...list];
    switch (filterSelected) {
      case 'rate':
        return listTemp.sort((a, b) => a.rate - b.rate);
      case 'podcast':
        return listTemp.filter((ele) => ele.kind == 'podcast');
      default:
      case 'music':
        return listTemp;
    }
  };

  return (
    <View style={homePageStyle.container}>
      <Text style={homePageStyle.title}>{'Bibliothèque'}</Text>
      <View style={homePageStyle.filterButtonContainer}>
        <FilterButton
          selected={filterSelected == 'music'}
          content={'Musique'}
          onPress={() => setFilterSelected('music')}
        />
        <FilterButton
          selected={filterSelected == 'rate'}
          content={'Note'}
          onPress={() => setFilterSelected('rate')}
        />
        <FilterButton
          selected={filterSelected == 'podcast'}
          content={'Podcast'}
          onPress={() => setFilterSelected('podcast')}
        />
      </View>
      <FlatList
        data={filterList(songList)}
        renderItem={({ item }) => (
          <SongCard
            goBack={'SongListUser'}
            stack={'SongDetailUser'}
            song={item}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{
          width: '100%',
          marginBottom: 10,
          height: 700,
          marginTop: 50,
          paddingHorizontal: '2.5%',
        }}
      />
    </View>
  );
};
export function HomePage(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='SongListUser'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SongListUser' component={SongListUser} />
      <Stack.Screen name='SongDetailUser' component={SongDetail} />
    </Stack.Navigator>
  );
}
