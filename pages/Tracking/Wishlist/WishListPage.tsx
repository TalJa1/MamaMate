/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/customHook';

const WishListPage = () => {
  useStatusBar('#19162E');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>WishListPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default WishListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
