/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../styles/stylesheet';
import {CalendarList} from 'react-native-calendars';
import LocaleConfig from '../services/localeConfig';

const DiaryPage = () => {
  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const [isMonth, setIsMonth] = React.useState(true);

  React.useEffect(() => {
    LocaleConfig;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#19162E'} />
      <View style={styles.diaryMode}>
        <View style={styles.switchMode}>
          <TouchableOpacity
            style={[
              styles.modeBtn,
              isMonth === false
                ? {
                    backgroundColor: '#96C1DE',
                    borderTopStartRadius: 20,
                    borderBottomStartRadius: 20,
                  }
                : {},
            ]}
            onPress={() => setIsMonth(false)}>
            <Text
              style={[
                styles.modeTxt,
                isMonth === false
                  ? {fontWeight: '700', fontSize: 18, color: '#221E3D'}
                  : {fontWeight: '400', fontSize: 18, color: '#96C1DE'},
              ]}>
              Tuần
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modeBtn,
              isMonth
                ? {
                    backgroundColor: '#96C1DE',
                    borderTopEndRadius: 20,
                    borderBottomEndRadius: 20,
                  }
                : {},
            ]}
            onPress={() => setIsMonth(true)}>
            <Text
              style={[
                styles.modeTxt,
                isMonth
                  ? {fontWeight: '700', fontSize: 18, color: '#221E3D'}
                  : {fontWeight: '400', fontSize: 18, color: '#96C1DE'},
              ]}>
              Tháng
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.daysOfMonth}>
          {weekDays.map((v: any, i: number) => (
            <View key={i}>
              <Text style={styles.daysOfMonthTxt}>{v}</Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <CalendarList
          theme={{
            calendarBackground: '#221E3D',
          }}
          firstDay={1}
        />
      </View>
    </SafeAreaView>
  );
};

export default DiaryPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221E3D',
    flex: 1,
  },
  diaryMode: {
    backgroundColor: '#19162E',
    height: vh(15),
    overflow: 'hidden',
    paddingHorizontal: vw(3),
    paddingVertical: vh(3),
  },
  switchMode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysOfMonth: {
    flexDirection: 'row',
    width: vw(100),
    position: 'absolute',
    justifyContent: 'space-evenly',
    bottom: vh(2),
  },
  modeBtn: {
    height: vh(5),
    width: 100,
    justifyContent: 'center',
  },
  modeTxt: {
    textAlign: 'center',
  },
  daysOfMonthTxt: {
    color: '#E0E0E0',
    fontWeight: '600',
    fontSize: 18,
  },
});
