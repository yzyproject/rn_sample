import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export let utils = {
    getRequest:function(url,successCallback,failcallback){
        feath(url)
        .then((response) => {response.json()})
        .then((responseData) => successCallback(responseData))
        .catch((erro) => failcallback(erro))
    },

    //londing效果
   londing: <ActivityIndicator />
}
