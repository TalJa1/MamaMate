/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('screen');

const MedicalhistoryPage = () => {
  const [diseaseName, setDiseaseName] = React.useState<string>('');

  const renderView = () => {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder="Tên bệnh"
            onChangeText={setDiseaseName}
            placeholderTextColor={'#E5CFEF61'}
            style={styles.textInput}
            value={diseaseName}
          />
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.inputTxtBtn}>Thêm</Text>
            <Text style={styles.inputIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <QuestionPageLayout
      image="pillow"
      title="Mẹ có tiền sử bệnh lý nào không ạ?"
      CustomView={renderView()}
      isDiscard={true}
      value={5}
      nextPage="Medicalhistory"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textInput: {
    width: 309,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#E5CFEF',
    color: '#E5CFEF',
  },
  btnAdd: {
    flexDirection: 'row',
    alignItems: 'baseline',
    columnGap: 20,
    marginVertical: 30,
  },
  inputTxtBtn: {
    color: '#E5CFEF61',
    fontSize: 18,
    fontWeight: '400',
  },
  inputIcon: {
    color: '#E5CFEF61',
    fontSize: 25,
    fontWeight: '200',
  },
});

export default MedicalhistoryPage;
