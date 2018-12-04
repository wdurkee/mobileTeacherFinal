import React from 'react';
import { ScrollView } from 'react-native';

const List = (props) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', width: '100%' }}>
      {props.children}
    </ScrollView>
  );
};

export { List };
