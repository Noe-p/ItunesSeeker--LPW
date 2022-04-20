import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SongCard, SongDetail } from '../../components';
import { songSelector } from '../../redux/songSlice';
import { SongType } from '../../types';
import { homePageStyle } from './homePageStyle';

const SongListUser = () => {
  const songList: SongType[] = useSelector(songSelector).song;

  return (
    <View style={homePageStyle.container}>
      <Text style={homePageStyle.title}>{'Bibliothèque'}</Text>
      <FlatList
        data={songList}
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
