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
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../styles/stylesheet';

interface ModeButtonProps {
  isActive: boolean;
  onPress: () => void;
  title: string;
  position: 'left' | 'right';
}

interface DayMonthSwitchComponentProps {
  isMonth: boolean;
  setIsMonth: (isMonth: boolean) => void;
}

const DayMonthSwitchComponent: React.FC<DayMonthSwitchComponentProps> = ({
  isMonth,
  setIsMonth,
}) => {
  return (
    <SafeAreaView>
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
          <></>
        ) : (
          <ScrollView horizontal>
            {Array.from({length: 41}, (_, index) => (
              <TouchableOpacity key={index} style={[styles.currentWeekGrp]}>
                <Text style={styles.currentWeekGrpTxt}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

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

export default DayMonthSwitchComponent;

const styles = StyleSheet.create({
  diaryMode: {
    overflow: 'hidden',
    paddingHorizontal: vw(3),
    paddingVertical: vh(2),
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
