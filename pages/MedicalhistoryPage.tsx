/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import QuestionPageLayout from '../components/QuestionPageLayout';
import {launchImageLibrary} from 'react-native-image-picker';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('screen');

const MedicalhistoryPage = () => {
  const [diseaseName, setDiseaseName] = React.useState<string>('');
  const [image, setImage] = React.useState<Array<string>>([]);

  const renderView = () => {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={styles.ImageStyle}
              onPress={async () => {
                try {
                  setImage([]);
                  const result: any = await launchImageLibrary({
                    mediaType: 'photo',
                    selectionLimit: 8,
                  });
                  if (result.assets.length > 0) {
                    for (let i = 0; i < result.assets.length; i++) {
                      setImage(pre => {
                        return [...pre, result.assets[i].uri];
                      });
                    }
                  }
                } catch (error) {
                  console.log(error);
                }
              }}>
              <Image
                style={styles.ImageStyle}
                source={
                  image.length === 0
                    ? require('../assets/Icons/image.png')
                    : require('../assets/Icons/edit.png')
                }
              />
            </TouchableOpacity>
            <TextInput
              // editable={false}
              placeholder="Tên bệnh"
              onChangeText={setDiseaseName}
              placeholderTextColor={'#E5CFEF61'}
              style={styles.textInput}
              value={diseaseName}
            />
          </View>
          <ScrollView horizontal style={styles.viewImg}>
            {image?.map((v, i) => (
              <Image key={i} style={styles.imgShow} source={{uri: v}} />
            ))}
          </ScrollView>
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
      nextPage="Medicalused"
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
    alignItems: 'center',
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
    alignItems: 'center',
  },
  ImageStyle: {
    position: 'absolute',
    right: 8,
    height: 25,
    width: 25,
    zIndex: 1,
  },
  viewImg: {
    marginTop: 25,
  },
  imgShow: {
    height: 115,
    width: 115,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default MedicalhistoryPage;
