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
  ListView,
  NativeModules,
    LayoutAnimation,
  Animated,
  Dimensions
} from 'react-native';
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
 UIManager.setLayoutAnimationEnabledExperimental(true);

export default class AwesomeProject extends Component {
   constructor(props) {
       super(props);
       this.state = {
           grassTransY : new Animated.Value(Dimensions.get('window').height/2),
           bigDogeTrans : new Animated.ValueXY({
               x: 100,
               y: 298
           }),
           moveDiv:new Animated.ValueXY({
               x: 0,
               y: 0
           })
       }
   }

   componentDidMount() {
       Animated.timing(this.state.grassTransY, {
           toValue: 200,
           duration: 1000
       }).start();

       Animated.timing(this.state.moveDiv, {
            toValue: {
                x : 100,
                y : 200
            },
           duration: 1000
       }).start();

       Animated.timing(this.state.bigDogeTrans, {
           toValue: {
               x : Dimensions.get('window').width/2 - 139,
               y : -200
           },
           duration: 2000,
           delay: 1000
       }).start();
   }

   render() {
       return (
           <View style={styles.container}>
               <Animated.View style={[styles.doges, {transform: this.state.bigDogeTrans.getTranslateTransform()}]} >
                   <Image source={require('./../../images/dog.png')}/>
               </Animated.View>

               <Animated.View style={[styles.grass, {transform: [{translateY: this.state.grassTransY}]}]}></Animated.View>
               <Animated.View style={[styles.moveDiv, {transform: this.state.moveDiv.getTranslateTransform()}]}></Animated.View>
           </View>


       );
   }
}

var styles = StyleSheet.create({
   grass: {
     position: 'absolute',
     width:  Dimensions.get('window').width,
     backgroundColor: '#A3D900',
     height: 240
   },
   doges: {
       position: 'absolute'
   },
   container: {
       flex: 1,
       backgroundColor: '#73B9FF'
   },
   moveDiv:{
       width:300,
       height:100,
       backgroundColor:"green"
   }
});