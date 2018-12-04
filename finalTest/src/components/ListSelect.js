import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


class ListSelect extends React.Component {


  /*handlePressed() {
    if (this.state.selected) {
      this.setState({ selected: false });
    } else {
      this.setState({ selected: true });
    }
  }
*/
  /*renderCircle() {
    if (this.state.selected) {
      return <View style={styles.selectedCircle} />;
    }
    return <View style={styles.emptyCircle} />;
  }*/
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.containerStyle}>
        <View style={styles.emptyCircle} />
        <Text style={styles.amount}>{this.props.amount}</Text>
        <Text style={styles.price}>${this.props.price}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  selectedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#c2ceb5',
    marginLeft: 20
  },
  emptyCircle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#c2ceb5',
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 20
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20
  },
  price: {
    fontSize: 16,
    marginLeft: 200
  }
};

export default ListSelect;
