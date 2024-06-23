/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {launchImageLibrary} from 'react-native-image-picker';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('screen');

const MedicalhistoryPage = () => {
  const [diseaseName, setDiseaseName] = React.useState<string>('');
  const [image, setImage] = React.useState<Array<string>>([]);
  console.log(image);

  const renderView = () => {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={styles.ImageStyle}
              onPress={async () => {
                setImage([]);
                const result: any = await launchImageLibrary({
                  mediaType: 'photo',
                  selectionLimit: 4,
                });
                for (let i = 0; i < result.assets.length; i++) {
                  setImage(pre => {
                    return [...pre, result.assets[i].uri];
                  });
                }
              }}>
              <Image
                style={styles.ImageStyle}
                source={require('../assets/Icons/image.png')}
              />
            </TouchableOpacity>
            <TextInput
              editable={false}
              placeholder="Tên bệnh"
              onChangeText={setDiseaseName}
              placeholderTextColor={'#E5CFEF61'}
              style={styles.textInput}
              value={diseaseName}
            />
          </View>
          <View style={styles.viewImg}>
            {image?.map((v, i) => (
              <Image key={i} style={styles.imgShow} source={{uri: v}} />
            ))}
          </View>
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
      value={diseaseName === '' ? 0 : 5}
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
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    position: 'absolute',
    right: 8,
    height: 28,
    width: 28,
    zIndex: 1,
  },
  viewImg: {
    marginTop: 20,
    flexDirection: 'row',
    columnGap: 10,
  },
  imgShow: {
    height: 115,
    width: 115,
    borderRadius: 10,
  },
});

export default MedicalhistoryPage;
