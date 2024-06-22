/* eslint-disable prettier/prettier */
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Question2Page = () => {
  const renderView = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.txtStyle}>Ngày đầu tiên của chu kỳ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txtStyle}>Ngày thụ thai</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txtStyle}>
            Bố/Mẹ biết con đang ở tuần thứ mấy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
