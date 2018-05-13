import React, { Component } from 'react';
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   View,
   Dimensions
 } from 'react-native';

//var Dimensions = require('Dimensions');
//var ScreenWidth = Dimensions.get('window').width;

import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

export default class Swipers extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            {/*设置horizontal为竖向排列 autoplay为自动播放*/}
             <Swiper style={styles.wrapper} height={100} showsButtons = { true } horizontal={true} autoplay autoplayTimeout={2}  >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height:150
    },

    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue'
        },
    slide3: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow'
        },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width:width,
        flex: 1
    }
});

