import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ListSelect from '../components/ListSelect';
import { ListItem, List, ListDescription, ListSection, ListImage } from '../components/common';
import {withNavigation} from 'react-navigation';
import firebase from 'firebase/app';
import 'firebase/firestore';


class TopicScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
    title: 'English'
  };
  state = {elementsArray: []}

  componentWillMount() {
    const db = firebase.firestore();
    var dataArray = [];
    var elementsArrayTemp = [];
    db.settings({
      timestampsInSnapshots: true
    });
    var videosRef = db.collection('videos');
    var allvideos = videosRef.get()
      .then(snapshot => {
      snapshot.forEach(doc => {
          var temp = doc.data();
          
          let result = {time: temp.length, tags: temp.tags, title: temp.title, url: temp.url};

          var tempTime = result.time;

          var minutes = tempTime/60;
          minutes = minutes | 0;
          var seconds = tempTime%60;

          var finalTime = minutes + ":" + seconds;

          result.time = finalTime;

          dataArray.push(result);
          this.setState({elementsArray: dataArray});
        });
      })
      .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  renderContent() {
    return this.state.elementsArray.map(function(curr, i){
      return(
        <ListItem
          key={i}
          title={curr.title}
          length={curr.time}
          onPress={this.props.navigation.navigate('Video', {title: "title"})}
        />
        );
    });
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <List>
          <ListSection headerText='Beginning English'>
            {this.renderContent()}
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

export default TopicScreen;
