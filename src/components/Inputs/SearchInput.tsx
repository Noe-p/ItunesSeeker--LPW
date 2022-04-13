import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from './Input';
import { searchInputStyle } from './searchInputStyle';
interface SearchInputProps extends TextInputProps {}

export function SearchInput(props: SearchInputProps): JSX.Element {
  const { style } = props;
  return (
    <Input
      icon={'search'}
      {...props}
      style={[searchInputStyle.inputSearch, style]}
    />
  );
}
