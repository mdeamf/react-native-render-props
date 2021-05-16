import React from 'react';
import { View, Text } from 'react-native';

const LOG = '[GREETINGS COMPONENTS]';

export const GreetingsComponent = (props) => {
  console.log(LOG, 'props', props);

  return (
    <View>
      <Text>Welcome,</Text>
      {props.getClientName(1)}
    </View>
  )
}