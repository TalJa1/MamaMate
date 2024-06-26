/* eslint-disable prettier/prettier */
import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomePage</Text>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {},
});
