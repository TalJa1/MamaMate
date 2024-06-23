/* eslint-disable prettier/prettier */
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const MenstrualcyclePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [amount, setAmount] = React.useState('01');
  const renderView = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.inputDay}>
          <Text style={styles.chosendayTxt}>
            {amount === '' ? '' : Array.from(amount)[0]}
          </Text>
          <Text style={styles.chosendayTxt}>
            {' '}
            {amount === '' ? '' : Array.from(amount)[1]}
          </Text>
        </TouchableOpacity>
        <Text style={styles.dayTxt}>ngày</Text>
      </View>
    );
  };

  return (
    <QuestionPageLayout
      image="pillow"
      title="Chu kỳ kinh nguyệt trung bình?"
      CustomView={renderView()}
      isDiscard={true}
      // value={choice}
      nextPage=""
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  dayTxt: {
    color: '#E5CFEF',
    fontWeight: '400',
    fontSize: 18,
  },
  inputDay: {
    flexDirection: 'row',
    height: 70,
    columnGap: 10,
    // alignItems: 'center',
  },
  chosendayTxt: {
    width: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5CFEF',
    color: '#E5CFEF',
    fontWeight: '400',
    textAlignVertical: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MenstrualcyclePage;
