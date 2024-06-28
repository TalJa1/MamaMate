/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../services/customHook';

const TrackingPage = () => {
  useStatusBar('#221E3D');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>TrackingPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default TrackingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
});
