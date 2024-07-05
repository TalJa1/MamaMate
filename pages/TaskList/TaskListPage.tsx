/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/customHook';
import {vh, vw} from '../../styles/stylesheet';
import {formattedDate, getDateTime} from '../../services/dayTimeService';

const TaskListPage = () => {
  const days = Array.from({length: 31}, (_, i) => i + 1);
  const today = getDateTime('day');
  useStatusBar('#19162E');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 15,
          width: vw(100),
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          backgroundColor: '#19162E',
        }}></View>
      <ScrollView style={{paddingVertical: vh(2)}}>
        <View style={{paddingHorizontal: vw(5)}}>
          <Text style={{color: '#EAE1EE', fontSize: 18, fontWeight: '700'}}>
            {formattedDate}
          </Text>
        </View>
        <View>{renderDays(days, Number(today))}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const renderDays = (days: Number[], today: number) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
      {days.map((day, i) => (
        <View
          key={i}
          style={[
            styles.dayBox,
            day === today ? {backgroundColor: '#96C1DE'} : {},
          ]}>
          <Text
            style={[
              styles.dayText,
              day === today ? {color: '#221E3D', fontWeight: '700'} : {},
            ]}>{`${day}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TaskListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
  scrollView: {
    paddingHorizontal: vw(2),
    paddingVertical: vh(2),
  },
  dayBox: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#322C56',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: vw(1),
  },
  dayText: {
    color: '#EAE1EE',
    fontSize: 18,
    fontWeight: '400',
  },
});
