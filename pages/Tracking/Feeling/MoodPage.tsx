/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/customHook';
import PregnancyCurrentWeekComponent from '../../../components/PregnancyCurrentWeekComponent';

const MoodPage = () => {
  useStatusBar('#19162E');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor: '#19162E'}}>
          <PregnancyCurrentWeekComponent />
        </View>
        <View>
          <Text>MoodPage</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoodPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
});
