/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  getCurrentWeekDays,
  getVietnamDayOfWeek,
} from '../services/dayTimeService';

const WeekContentComponent = () => {
  const {days} = getCurrentWeekDays();
  console.log(`${days[0]}`);

  const today = getVietnamDayOfWeek();

  console.log(today);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Tasdfasdfasdf</Text>
      </View>
    </ScrollView>
  );
};

export default WeekContentComponent;

const styles = StyleSheet.create({
  container: {},
});
