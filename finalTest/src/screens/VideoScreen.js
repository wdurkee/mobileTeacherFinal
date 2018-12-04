import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';


class VideoScreen extends React.Component {
  static navigationOptions = {
    title: 'Video',
  };
  openURL(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      }
      else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  render() {
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    const author = params ? params.author : null;
    const length = params ? params.length : null;
    const link = params ? params.link: null;

    return (

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white' }}>
        <View style={styles.titleBox} >
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.info}>
            <Image style={{ height: 15, width: 15, marginRight: 10 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOshcJkmYWYYilyAHPayOP8kZUwpjBpYkv2lHFjywYiYgXDK_j' }} />
            <Text>
              {author}
            </Text>
          </View>
        </View>

        <View style={styles.itemStyle}>
          <Text>Length: {length}</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Published: October 2018</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Minimum Data Size: 25MB</Text>
        </View>

        <TouchableOpacity style={styles.bottomButton} onPress={
              () => this.openURL(link)
            } >
          <Text style={styles.bottomButtonText}>
            Download
          </Text>
        </TouchableOpacity>
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
  itemStyle: {
    width: '100%',
    height: '17%',
    borderBottomWidth: 1,
    borderColor: '#dcdee2',
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '90%',
    height: '30%',
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
    marginTop: 30,
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
    height: 70,
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
export default VideoScreen;
