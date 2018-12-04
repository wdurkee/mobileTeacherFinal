import React from 'react';
import { View, Text } from 'react-native';

const ListSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerText}>
        {props.headerText}
      </Text>
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 20,
    color: '#1b421e'
  }
};

export { ListSection };
