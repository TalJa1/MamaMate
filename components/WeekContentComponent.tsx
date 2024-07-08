/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {getDiaryWeekData} from '../services/renderData';
import {getDateTime} from '../services/dayTimeService';
import {vh, vw} from '../styles/stylesheet';
import {DiaryEntry} from '../services/typeProps';

const WeekContentComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = React.useState<DiaryEntry[]>(getDiaryWeekData);
  const today = getDateTime('day');

  return (
    <ScrollView
      style={{
        paddingVertical: vh(2),
      }}>
      <View style={{rowGap: vh(2)}}>
        {data.map((v, i) => (
          <View key={i} style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              <TouchableOpacity
                onPress={() => {}}
                style={[
                  styles.circleDate,
                  Number(today) === Number(v.date)
                    ? {backgroundColor: '#EAE1EE'}
                    : {},
                ]}>
                <Text
                  style={[
                    styles.circleDateTxT,
                    {fontSize: 12},
                    Number(today) === Number(v.date) ? {color: '#221E3D'} : {},
                  ]}>
                  {v.dayOfWeek}
                </Text>
                <Text
                  style={[
                    styles.circleDateTxT,
                    {fontSize: 18, fontWeight: '700'},
                    Number(today) === Number(v.date) ? {color: '#221E3D'} : {},
                  ]}>
                  {v.date}
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 18, color: '#8B8B8B'}}>
                {Number(today) === Number(v.date) ? 'Hôm nay' : v.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default WeekContentComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw(5),
  },
  circleDate: {
    borderWidth: 1,
    borderColor: '#CDCDCD',
    height: 44,
    width: 44,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleDateTxT: {
    color: '#CDCDCD',
  },
});
