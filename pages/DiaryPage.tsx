/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
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
import WeekContentComponent from '../components/WeekContentComponent';
import {loadData, saveData} from '../data/storage';
import {DiaryEntry} from '../services/typeProps';
import {getDiaryWeekData} from '../services/renderData';

const DiaryPage: React.FC = () => {
  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const [data, setData] = React.useState<DiaryEntry[]>([]);
  const [isMonth, setIsMonth] = React.useState<boolean>(false);
  const current = 16;

  useStatusBar('#19162E');

  React.useEffect(() => {
    LocaleConfig;
  }, []);

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
    <SafeAreaView style={styles.container}>
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
        {isMonth ? (
          <View style={styles.daysOfMonth}>
            {weekDays.map((day, index) => (
              <DayOfWeek key={index} day={day} />
            ))}
          </View>
        ) : (
          <ScrollView horizontal>
            {Array.from({length: 41}, (_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.currentWeekGrp,
                  index + 1 === current ? {backgroundColor: '#AA3A3A'} : {},
                ]}
                disabled>
                <Text
                  style={[
                    styles.currentWeekGrpTxt,
                    index + 1 !== current ? {color: '#8B8B8B'} : {},
                  ]}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      <View style={{flex: 1}}>
        {!isMonth ? (
          <View style={{paddingTop: vh(1)}}>
            <WeekContentComponent />
          </View>
        ) : (
          <CalendarRender />
        )}
      </View>
    </SafeAreaView>
  );
};

const CalendarRender = () => {
  return (
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
      onDayPress={date => console.log(date)}
      markedDates={{
        '2024-06-26': {color: '#AF90D6', startingDay: true},
        '2024-06-27': {color: '#AF90D6'},
        '2024-06-28': {color: '#AF90D6'},
        '2024-06-29': {color: '#AF90D6', endingDay: true},
      }}
      markingType="period"
    />
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
    height: 130,
    overflow: 'hidden',
    paddingHorizontal: vw(3),
    paddingTop: vh(2),
    rowGap: vh(1),
  },
  switchMode: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  daysOfMonth: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    height: 44,
    textAlignVertical: 'center',
  },
  currentWeekGrp: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: vw(2),
    backgroundColor: '#322C56',
  },
  currentWeekGrpTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});
