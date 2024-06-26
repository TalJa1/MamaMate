/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Question2Page = () => {
  const [choice, setChoice] = React.useState<number>(0);
  const renderView = () => {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setChoice(1)}>
          <Text
            style={[
              styles.txtStyle,
              choice === 1 ? {color: '#E5CFEF'} : {color: 'gray'},
            ]}>
            Ngày đầu tiên của chu kỳ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChoice(2)}>
          <Text
            style={[
              styles.txtStyle,
              choice === 2 ? {color: '#E5CFEF'} : {color: 'gray'},
            ]}>
            Ngày thụ thai
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChoice(3)}>
          <Text
            style={[
              styles.txtStyle,
              choice === 3 ? {color: '#E5CFEF'} : {color: 'gray'},
            ]}>
            Bố/Mẹ biết con đang ở tuần thứ mấy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChoice(4)}>
          <Text
            style={[
              styles.txtStyle,
              choice === 4 ? {color: '#E5CFEF'} : {color: 'gray'},
            ]}>
            Ngày sinh dự kiến của con
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <QuestionPageLayout
      image="pregnancyTimetable"
      title="Phương pháp tính thời gian mang bầu của mẹ là gì ạ?"
      CustomView={renderView()}
      isDiscard={false}
      value={choice}
      nextPage="MethodInput"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 24,
  },
  txtStyle: {
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Question2Page;
