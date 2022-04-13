import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { inputStyle } from './inputStyle';

interface InputProps extends TextInputProps {
  icon?: string;
}

export function Input(props: InputProps): JSX.Element {
  const { style, icon } = props;
  return (
    <View style={[inputStyle.container, style]}>
      {icon ? (
        <Ionicons
          style={inputStyle.icon}
          name={icon}
          size={30}
          color={'black'}
        />
      ) : (
        <></>
      )}
      <TextInput
        {...props}
        placeholderTextColor={'black'}
        style={inputStyle.input}
      />
    </View>
  );
}
