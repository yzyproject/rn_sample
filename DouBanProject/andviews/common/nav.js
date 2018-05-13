import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
//import { Navigator } from "react-native-deprecated-custom-components";
//import {Navigator} from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class header extends Component<{}> {
   constructor (props){
       super (props)

   }


    render (){
        let rootRoute = {
            component:this.props.component,
            passProps:{

            }
        }
        return (
            <NavigationExperimental.Navigator
                initiaRoute = { rootRoute }
                configureScene={
                    (route) => {
                        return Navigator.SceneConfigs.PushFromRight
                    }
                }
                renderScene = {
                    ( route, navigator) => {
                        let Component = route.component;
                        return (
                            <View>
                                 <Component
                                      navigator = {navigator}
                                      route = { route }
                                      {...route.passProps}
                                  />
                            </View>
                        )
                    }
                }
            />
        )
    }
}

