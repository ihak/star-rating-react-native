/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StarRating from './StarRating/star-rating';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const ratingObj = {
      ratings: 3,
      views: 34000
    }

    return (
      <View style={styles.container}>
        <StarRating ratingObj={ratingObj}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
