import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ListTopicDescription } from './ListTopicDescription';
import { ListImage } from './ListImage';


const ListTopicItem = (props) => {
  const title = props ? props.title : null;
  const author = props ? props.author: null;
  const length = props ? props.length : null;
  return (

    <TouchableOpacity onPress={props.onPress} style={styles.containerStyle}>
      <ListTopicDescription title={title} author={author} length={length} />
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    width: '100%',
    height: 80,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  }
};

export { ListTopicItem };
