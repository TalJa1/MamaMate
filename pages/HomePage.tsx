/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../styles/stylesheet';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.firstTxt}>Tuần thai hiện tại:</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw(3),
    backgroundColor: '#221E3D',
    height: vh(100),
    paddingTop: vh(1),
  },
  firstTxt: {
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
  },
});
