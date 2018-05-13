import React, { Component } from 'react';
 import { SwipeListView } from 'react-native-swipe-list-view';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
  NativeModules,
    LayoutAnimation,
  Animated
} from 'react-native';

export default class Style extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style = { styles.chlid}>
              <Text>测试样式</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
         width:100,
         height:100,
         backgroundColor:"green",
         position:"relative"
     },
     chlid:{
          width:50,
          height:50,
          backgroundColor:"blue",
          position:"absolute",
          top:10,
          left:10
     }
});