/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import KsiBarcode from "react-native-ksi-barcode"

export default class barcodeTest extends Component {
  render() {
    return (
       <View style={styles.container}>


        <KsiBarcode style={styles.large} text="999"/>
        <KsiBarcode style={styles.large} text="999999999"/>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  large:{
    fontSize:50,
  },
  llarge:{
    fontSize:100,
  },
});

AppRegistry.registerComponent('barcodeTest', () => barcodeTest);
