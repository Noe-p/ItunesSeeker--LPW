import React from 'react';
import { TextInputProps } from 'react-native';
import searchInputStyle from '../../styles/components/searchInput.scss';
import { Input } from './Input';

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
