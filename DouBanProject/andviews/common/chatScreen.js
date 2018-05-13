import React from 'react';
import { StyleSheet, Text, View ,Image ,ListView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends React.Component {
  constructor (props){
      super (props)
      this.state ={
          dataSource:""
      }
  }
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${ navigation.state.params.user }`,
  });



  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          var datas=ds.cloneWithRows(params)
        return (
             <View>
                 <View style={styles.row}>
                      <View>
                          <Image style = {styles.img} source = { {uri:params.imageURL} } />
                      </View>
                      <View style = {styles.padd}>
                          <Text>{params.title}</Text>
                          <Text>{params.author}</Text>
                          <Text>{params.price}</Text>
                          <Text>{params.pubdate}</Text>
                          <Text>{params.subtitle}</Text>
                      </View>

                  </View>
                 <ListView style = {styles.lv}
                     dataSource = { datas }
                     renderRow = { (data)=>{console.log(data); return (
                         <View>
                             <Text>{ data }</Text>
                         </View>
                     )}  }
                 />
              </View>
        );
  }
}

const styles=StyleSheet.create({
    row:{
        height:140,
        flexDirection:"row",
        padding:8,
        backgroundColor:"#fff",
        marginTop:5
    },
    header:{
        height:30,
        backgroundColor:"green"
    },
    img:{
            width:100,
            height:125
    },
    padd:{
        paddingLeft:10
    },
    wordsBox:{
        backgroundColor:"#fff",
        padding:10,
        marginTop:10,

    },
    word:{
        lineHeight:20,
    },
    lv:{
        backgroundColor:"#fff",
        height:235,
        marginTop:2,
        padding:10
    }
})

