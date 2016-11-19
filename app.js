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
    let val = "";
    for (let i = 0; i < 9; i++) {
      val += "9"
    }
    return (
      <View style={styles.container}>
        <KsiBarcode text='11111111' />
        <KsiBarcode text='99999999' />
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

  large: {
    fontSize: 50, flex: 1,
  },
  llarge: {
    fontSize: 90, flex: 1,
  },
});

AppRegistry.registerComponent('barcodeTest', () => barcodeTest);
