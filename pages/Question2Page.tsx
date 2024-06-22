/* eslint-disable prettier/prettier */
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Question2Page = () => {
  const [choice, setChoice] = React.useState<number>(0);
  const renderView = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setChoice(1)}>
          <Text style={styles.txtStyle}>Ngày đầu tiên của chu kỳ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChoice(2)}>
          <Text style={styles.txtStyle}>Ngày thụ thai</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChoice(3)}>
          <Text style={styles.txtStyle}>
            Bố/Mẹ biết con đang ở tuần thứ mấy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChoice(4)}>
          <Text style={styles.txtStyle}>Ngày sinh dự kiến của con</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <QuestionPageLayout
      image="pregnancyTimetable"
      title="Phương pháp tính thời gian mang bầu của mẹ là gì ạ?"
      CustomView={renderView()}
      isDiscard={false}
      value={choice}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 24,
  },
  txtStyle: {
    padding: 10,
    color: '#E5CFEF',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Question2Page;
