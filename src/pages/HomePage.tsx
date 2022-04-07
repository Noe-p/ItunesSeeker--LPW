import React from 'react';
import { Text, View } from 'react-native';
import stylesHome from '../styles/pages/home.scss';

export function HomePage(): JSX.Element {
  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>{'Bibliothèque'}</Text>
    </View>
  );
}
