  import React, { Component } from 'react';
  import TabNavigator from 'react-native-tab-navigator';



  import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

    var Dimensions = require('Dimensions');

    // 入口
    export default class TestRN extends Component<{}> {
        render() {
            return (
                <View>
                <Image source={{uri:'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}} style={styles.imgStyle}></Image>
                </View>
            );
        }
    }

    // 样式
    const styles = StyleSheet.create({
        container: {
            backgroundColor:'blue',
            flex:1,
        },

        imgStyle: {
            // 设置背景颜色
            backgroundColor:'green',
            // 设置宽度
            width:Dimensions.get('window').width,
            // 设置高度
            height:150
        }
    });