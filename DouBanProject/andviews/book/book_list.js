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

import SearchBar from  './../common/searchBar'
import BookItem from  './book_Items'

import Service from  './../common/service'
import Util from  './../common/util'
import Loopedcarousels from  './../common/loopedcarousels'



export default class fastMovieList extends Component<{}>{
    constructor (props){
        super(props)
        this.state={
            loadData:false,
            dataSource:"",
            keyURL:'react'
        }
        this.getData=this.getData.bind(this);
        this.onRow=this.onRow.bind(this);
        this.onHeader=this.onHeader.bind(this)
        this.changeText = this.changeText.bind(this)
        this.searchPress=this.searchPress.bind(this)

    }

    componentDidMount (){
        this.getData();
    }

    getData (){
            let formData = new FormData();
            let baseURL = 'https://api.douban.com/v2/book/search?count=20&q='
            let url =baseURL + this.state.keyURL
            formData.append("name","admin");
            formData.append("password","admin123");
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            fetch( url,{
                 method: 'get'

            })
            .then((response) => {
                 return response.json();
            })
            .then((responseData) => {
                console.log(responseData)
                if(!responseData.books || responseData.books.length == 0  ){
                    return alert("未查询到相关书籍")
                }else{
                    this.setState({
                        loadData:true,
                        dataSource:ds.cloneWithRows(responseData.books)
                    })
                }
            })
            .catch((erro) => {
                 console.log(erro)
            })
    }

    onRow (data){
        const navigates  = this.props.navigate;
        return (
            <TouchableOpacity onPress={() => navigates('Chat', {
                 imageURL:data.image,
                 title:data.title,
                 author:data.author,
                 pubdate:data.pubdate,
                 subtitle:data.subtitle,
                 summary:data.summary
             })}>
                <View style={styles.row}>
                    <View>
                        <Image style = {styles.img} source = { {uri:data.image} } />
                    </View>
                    <View style = {styles.padd}>
                        <Text>{data.title}</Text>
                        <Text>{data.author}</Text>
                        <Text>{data.price}</Text>
                        <Text>{data.pubdate}</Text>
                        <Text>{data.subtitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    onHeader (){
        return (
            <View style = { styles.header }>
                 <Text>fetch list</Text>
            </View>
        )
    }

    changeText (text){
        this.setState({
            keyURL:text
        })
    }

    searchPress (){
        this.getData();
    }

    renderSeparator (sectionId:number,rowId:number){
         let sty={
             height:1

         }
         return (
             <View style ={ sty } key = { sectionId + rowId }></View>
         )
    }

    render (){

        if(!this.state.loadData){
            //加载londing....页面
            return (
                <View>
                    <Text>等待加载。。。。。</Text>
                </View>
            )
        }

        return (
            <View>
                <SearchBar
                     placeholder="请输入搜索内容"
                     onPress = {this.searchPress}
                     onChangeText = {this.changeText}
                 />
                <ListView
                    dataSource = { this.state.dataSource }
                    renderRow = { this.onRow }
                    renderSeparator = { this.renderSeparator }
                />
            </View>
        )
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
    }
})




