import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { filterButtonStyle } from './filterButtonStyle';

interface FilterButtonProps extends PressableProps {
  content: string;
  selected?: boolean;
}

export const FilterButton = (props: FilterButtonProps) => {
  const { onPress, content, selected } = props;

  const buttonColor = selected
    ? {
        backgroundColor: '#137736',
        borderColor: '#1DB954',
      }
    : {
        backgroundColor: '#191414',
        borderColor: 'grey',
      };
  return (
    <Pressable
      onPress={onPress}
      style={[filterButtonStyle.button, buttonColor]}
    >
      <Text style={filterButtonStyle.text}>{content}</Text>
    </Pressable>
  );
};
