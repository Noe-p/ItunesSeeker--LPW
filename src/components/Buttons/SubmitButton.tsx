import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { submitButtonStyle } from './submitButtonStyle';

interface SubmitButtonProps extends PressableProps {
  content: string;
  color: string;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { onPress, content, color } = props;
  return (
    <Pressable
      onPress={onPress}
      style={[submitButtonStyle.button, { backgroundColor: color }]}
    >
      <Text style={submitButtonStyle.text}>{content}</Text>
    </Pressable>
  );
};
