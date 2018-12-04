import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ListSelect from '../components/ListSelect';
import { ListItem, ListTopicItem, ListTopicDescription, List, ListDescription, ListSection, ListImage } from '../components/common';


class CategoriesScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
    title: 'Select Topic'
  };


  render() {


    return (

      <View style={{ flex: 1 }}>
        <List>
          <ListSection headerText='English'>
            <ListTopicItem
              title={'Beginning English'}
              length={'5 Videos'}
              onPress={() => this.props.navigation.navigate('Topic', { section: 'English', topic: 'Beginning English'})}
             />
          </ListSection>

        </List>
    </View>

    );
  }
}


const styles = {
  totalStyle: {
    paddingTop: 30,
    paddingLeft: 200,
    fontSize: 14,
    fontWeight: 'bold'
  },
  imageStyle: {
    width: 250,
    height: 166
  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    margin: 10,
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  info: {
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  hours: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  bottomButton: {
    width: '100%',
    height: 100,
    backgroundColor: '#c2ceb5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  }
};

export default CategoriesScreen;
