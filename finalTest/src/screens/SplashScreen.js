import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image, Button } from 'react-native';
import firebase from 'firebase/app';
//import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
//import { Card, CardSection, Button } from '../components/common';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCAde-t0xEEegn206zVGfSeGelK0Tuu2_4",
      authDomain: "mobile-teacher-2f1ac.firebaseapp.com",
      projectId: "mobile-teacher-2f1ac"
    });
  }

  render() {
    return (

        <View style={styles.viewStyle} >


            <Text style={styles.textStyle}>
            Welcome to Mobile Teacher
            </Text>
            <View style={{ height: '30%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.manImageStyle} source={require('../images/Logo.png')} />
            </View>
            <Text style={styles.textStyleSmall}>
            Please make sure you have the youtube go app already downloaded
            </Text>
            <Button style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Categories')} title="Continue!" />

          </View>

    );
  }
}


const styles = {
  viewStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: '#307221',
    flex: 1,
    //height: '100%',
    //width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  gradientStyle: {
    flex: 1,
    //height: '100%',
    //width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
  },
  textStyle: {
    fontStyle: 'italic',
    paddingTop: 100,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#aee2c9',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  manImageStyle: {
    resizeMode: 'contain',
    height: 350,
    width: 175,
    marginTop: 75,

  },
  textStyleSmall: {
    fontStyle: 'italic',
    paddingTop: 75,
    paddingLeft: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#aee2c9',
    backgroundColor: 'rgba(0,0,0,0)',
    width: '80%'
  },
  arrows: {
    fontSize: 40,
    marginLeft: '60%',
    marginTop: 25,
    color: '#008445',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonStyle: {
    marginTop: 50,
    fontSize: 24,
    color: '#96ce9c',
  }
};

export default SplashScreen;
