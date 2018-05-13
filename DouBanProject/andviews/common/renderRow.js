import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';

export default class renderRow extends Component<{}>{
        const navigate = this.props.navigate;
        const data = this.props.datas;
        return (
            <TouchableOpacity onPress={() => navigate('Chat', { user:data.title })}>
                <View style={styles.row}>
                    <Text>{data.title}</Text>
                    <Text>{data.releaseYear}</Text>
                </View>
            </TouchableOpacity>
        )
}