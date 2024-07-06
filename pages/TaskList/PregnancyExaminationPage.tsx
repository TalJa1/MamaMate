/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/customHook';

const PregnancyExaminationPage = () => {
  useStatusBar('#B95649');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>PregnancyExaminationPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default PregnancyExaminationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
});
