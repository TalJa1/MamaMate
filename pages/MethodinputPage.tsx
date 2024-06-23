/* eslint-disable prettier/prettier */
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {getTitleSource} from '../services/imageHelper';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('screen');

type MethodInputParams = {
  value: number;
};

type RootStackParamList = {
  MethodInput: MethodInputParams;
};

const MethodinputPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MethodInput'>>();
  const {value} = route.params;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = React.useState({
    day: 'DD',
    month: 'MM',
    year: 'YYYY',
  });

  const renderView = () => {
    return value !== 3 ? (
      <View style={styles.container}>
        <View style={styles.columnStyle}>
          <Text style={styles.inputTxt}>Ngày</Text>
          <View>
            <TouchableOpacity style={styles.btnOpacity}>
              <Text style={styles.timeTxt}>{date.day}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.dashed}>-</Text>
        <View style={styles.columnStyle}>
          <Text style={styles.inputTxt}>Tháng</Text>
          <TouchableOpacity style={styles.btnOpacity}>
            <Text style={styles.timeTxt}>{date.month}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.dashed}>-</Text>
        <View style={styles.columnStyle}>
          <Text style={styles.inputTxt}>Năm</Text>
          <TouchableOpacity style={styles.btnOpacity}>
            <Text style={styles.timeTxt}>{date.year}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View>
        <Text>For 3 only</Text>
      </View>
    );
  };

  return (
    <QuestionPageLayout
      image="sanitaryNapkin"
      title={`${getTitleSource(value)}?`}
      CustomView={renderView()}
      isDiscard={false}
      value={5}
      nextPage="Menstrualcycle"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width,
    alignItems: 'center',
    marginTop: 30,
  },
  inputTxt: {
    color: '#AF90D6',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
  },
  btnOpacity: {
    borderWidth: 1,
    borderColor: '#E5CFEF',
    height: 70,
    width: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTxt: {
    color: '#E5CFEF',
    fontSize: 18,
    fontWeight: '400',
  },
  dashed: {
    color: '#E5CFEF',
    position: 'relative',
    top: 15,
  },
  columnStyle: {
    rowGap: 13,
  },
});

export default MethodinputPage;