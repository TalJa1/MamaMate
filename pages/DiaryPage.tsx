/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CalendarList} from 'react-native-calendars';
import LocaleConfig from '../services/localeConfig';
import useStatusBar from '../services/customHook';
import {vh, vw} from '../styles/stylesheet';

const DiaryPage: React.FC = () => {
  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const [isMonth, setIsMonth] = React.useState<boolean>(true);

  useStatusBar('#19162E');

  React.useEffect(() => {
    LocaleConfig;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#19162E" />
      <View style={styles.diaryMode}>
        <View style={styles.switchMode}>
          <ModeButton
            isActive={!isMonth}
            onPress={() => setIsMonth(false)}
            title="Tuần"
            position="left"
          />
          <ModeButton
            isActive={isMonth}
            onPress={() => setIsMonth(true)}
            title="Tháng"
            position="right"
          />
        </View>
        <View style={styles.daysOfMonth}>
          {weekDays.map((day, index) => (
            <DayOfWeek key={index} day={day} />
          ))}
        </View>
      </View>
      <View>
        <CalendarList
          theme={{
            calendarBackground: '#221E3D',
            dayTextColor: '#ffffff',
            todayTextColor: '#221E3D',
            monthTextColor: '#96C1DE',
            todayBackgroundColor: '#E5CFEF',
            textDayFontSize: 18,
            textDayFontWeight: '400',
          }}
          firstDay={1}
          markedDates={{
            '2024-06-26': {color: '#AF90D6', startingDay: true},
            '2024-06-27': {color: '#AF90D6'},
            '2024-06-28': {color: '#AF90D6'},
            '2024-06-29': {color: '#AF90D6', endingDay: true},
          }}
          markingType="period"
        />
      </View>
    </SafeAreaView>
  );
};

interface ModeButtonProps {
  isActive: boolean;
  onPress: () => void;
  title: string;
  position: 'left' | 'right';
}

const ModeButton: React.FC<ModeButtonProps> = React.memo(
  ({isActive, onPress, title, position}) => (
    <TouchableOpacity
      style={[
        styles.modeBtn,
        isActive && {
          backgroundColor: '#96C1DE',
          borderTopStartRadius: position === 'left' ? 20 : 0,
          borderBottomStartRadius: position === 'left' ? 20 : 0,
          borderTopEndRadius: position === 'right' ? 20 : 0,
          borderBottomEndRadius: position === 'right' ? 20 : 0,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.modeTxt,
          isActive
            ? {fontWeight: '700', fontSize: 18, color: '#221E3D'}
            : {fontWeight: '400', fontSize: 18, color: '#96C1DE'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  ),
);

interface DayOfWeekProps {
  day: string;
}

const DayOfWeek: React.FC<DayOfWeekProps> = React.memo(({day}) => (
  <View>
    <Text style={styles.daysOfMonthTxt}>{day}</Text>
  </View>
));

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
