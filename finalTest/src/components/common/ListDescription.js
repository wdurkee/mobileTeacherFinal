import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component

const ListDescription = (props) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.textViewStyle}>
        <Text style={styles.nameText}>{props.title}</Text>
        <Text style={styles.strainText}>{props.author}</Text>
        <Text style={styles.priceText}>{props.length}</Text>
      </View>
      <Image style={styles.arrowStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKtowj3LvusoWpxfergvkHIacyfVGu1OtzMGoqWpcIqPyDyVpIA' }} />
    </View>
  );
};


const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  arrowStyle: {
    height: 20,
    width: 20,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  textViewStyle: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '80%'
  },
  imageStyle: {
    height: '10%',
    width: '35%'
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 3
  },
  strainText: {
    color: 'gray',
    fontSize: 12,
    paddingLeft: 20
  },
  quantityText: {
    color: 'grey',
    fontSize: 9,
    paddingLeft: 20,
    paddingBottom: 3
  },
  priceText: {
    fontSize: 12,
    paddingLeft: 20
  }
};

// Make the component available to other parts of the app
export { ListDescription };
