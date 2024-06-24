/* eslint-disable prettier/prettier */
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('screen');

const MenstrualcyclePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [amount, setAmount] = React.useState('01');
  const renderView = () => {
    return (
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    );
  };

  return (
    <QuestionPageLayout
      image="pillow"
      title="Chu kỳ kinh nguyệt trung bình?"
      CustomView={renderView()}
      isDiscard={true}
      value={5}
      nextPage="Medicalhistory"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    width: width,
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
