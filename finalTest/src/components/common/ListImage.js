import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const ListImage = (props) => {


  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: 'https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' }} />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    position: 'relative',
    borderRightWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
  },
  imageStyle: {
    height: 78,
    width: 100
  }
};

// Make the component available to other parts of the app
export { ListImage };
