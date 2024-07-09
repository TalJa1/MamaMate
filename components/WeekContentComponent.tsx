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
import {loadData, saveData} from '../data/storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const WeekContentComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [data, setData] = React.useState<DiaryEntry[]>([]);
  const today = getDateTime('day');

  React.useEffect(() => {
    loadData<DiaryEntry[]>('diaryWeekData')
      .then(loadedData => {
        if (loadedData) {
          setData(loadedData);
          // console.log(loadedData);
        } else {
          const initialData = getDiaryWeekData();
          setData(initialData);
          saveData('diaryWeekData', initialData);
        }
      })
      .catch(() => {
        const initialData = getDiaryWeekData();
        setData(initialData);
        saveData('diaryWeekData', initialData);
      });
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      saveData('diaryWeekData', data);
    }
  }, [data]);

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
                onPress={() => navigation.navigate('DiaryUpdate', {index: i})}
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
