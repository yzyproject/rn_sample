import React, { Component } from 'react';
// import { SwipeListView } from 'react-native-swipe-list-view';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';

export default class swipeList extends Component<{}> {
   render() {
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          const dataSource = ['a', 'b', 'c',"yzy"];
          return (
              <View style={styles.outView}>

                  <SwipeRow
                      leftOpenValue={75}
                      rightOpenValue={-75}
                      disableRightSwipe={true}   //禁止向右滑动

                  >
                      <View style={styles.rowBack}>

                          <Text allowFontScaling={false}>加入</Text>
                          <Text allowFontScaling={false}>购物车</Text>

                      </View>
                      <View style={{alignItems: 'center', backgroundColor: '#CCC', height: 50, justifyContent: 'center'}}>
                          <Text>I am a standalone SwipeRow</Text>
                      </View>

                  </SwipeRow>

                  <View style={{height: 20}}/>

                  <SwipeListView
                      dataSource={ds.cloneWithRows(dataSource)}
                      renderRow={ data => (
                          <View style={styles.rowFront}>
                              <Text>I am {data} in a SwipeListView</Text>
                          </View>
                      )}

                      renderHiddenRow={ (data, secdId, rowId, rowMap) => (
                          <View style={styles.rowBack}>
                              <TouchableOpacity onPress={() => rowMap[`${secdId}${rowId}`].closeRow()}>
                                  <View style={styles.leftView}>
                                      <Text style={{backgroundColor: 'red'}}>Left</Text></View>
                              </TouchableOpacity>
                              <View style={styles.leftView}>
                                  <Text style={{backgroundColor: 'red'}}>delete</Text></View>
                          </View>
                      )}
                      leftOpenValue={75}
                      rightOpenValue={-75}
                      tension = { 10 }
                      friction = {10}
                      previewOpenValue = {1000}
                  />
              </View>
          )
      }

  }

  const styles = StyleSheet.create({
      outView: {
          flex: 1,
          marginTop: 22
      },
      rowBack: {
          alignItems: 'center',
          backgroundColor: '#DDD',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1
      },
      rowFront: {
          alignItems: 'center',
          backgroundColor: '#CCC',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          justifyContent: 'center',
          height: 50,
      },
      leftView: {
          width: 75,
          alignItems: 'center',
          backgroundColor: 'green',
          height: 50,
          justifyContent: 'center'
      }
  })