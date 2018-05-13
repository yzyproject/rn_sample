/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';



import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchBar from  './andviews/common/searchBar'
import Navigators from  './andviews/common/navigators'
import BookList from  './andviews/book/book_list'
import TabTopView from  './andviews/common/scrollableTabView'
import Loopedcarousels from  './andviews/common/loopedcarousels'
import Headr from  './andviews/common/header'

import Imagecom from  './andviews/common/imagecomponent'
import SwipeList from  './andviews/common/swipelistview'
import Animate from  './andviews/common/animate'
import Style from  './andviews/common/style'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class DouBanProject extends Component<{}> {
      constructor (porps){
          super(porps)
          this.state = {
              selectedTab:"图书"
          }
      }
      render() {
        return (
            <View style={styles.container} >

                    <TabNavigator tabBarStyle={styles.tab}>
                                        <TabNavigator.Item
                                            selected={this.state.selectedTab === '图书'}
                                            title="图书"
                                            titleStyle={styles.tabText}
                                            selectedTitleStyle={styles.selectedTabText}
                                            onPress={() => this.setState({ selectedTab: '图书' })}>
                                           <Animate />
                                        </TabNavigator.Item>
                                        <TabNavigator.Item
                                            selected={this.state.selectedTab === '电影'}
                                            title="电影"
                                            titleStyle={styles.tabText}
                                            selectedTitleStyle={styles.selectedTabText}
                                            onPress={() => this.setState({ selectedTab: '电影' })}>
                                            <TabTopView />
                                        </TabNavigator.Item>
                                    </TabNavigator>


            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
        height: 70,
        backgroundColor: '#222222',
        alignItems: 'center'
    },
    tabText: {
        marginTop: 1,
        color: '#ffffff',
        fontSize: 16
    },
    selectedTabText: {
        marginTop: 1,
        color: '#FFD700',
        fontSize: 16
    },
    icon: {
        width: 30,
        height: 31,
        resizeMode: 'stretch',
        marginTop: 10
    }
});
