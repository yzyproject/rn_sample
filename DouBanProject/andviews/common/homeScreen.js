import React from 'react';
import { AppRegistry, Text, View, Button,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BookList from  './../book/book_list';




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '图书管理',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
            <BookList navigate = { navigate }/>
      </View>
    );
  }
}



