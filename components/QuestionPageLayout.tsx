/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getImageSource} from '../services/imageHelper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

interface RenderLayout {
  image: string;
  title: string;
  CustomView?: ReactNode;
  isDiscard?: boolean;
  // Get the user's choice => can be null
  value?: number;
}

const QuestionPageLayout: React.FC<RenderLayout> = ({
  image,
  title,
  CustomView,
  isDiscard,
  value = -1,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <TouchableOpacity
          style={styles.backBtnOpa}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backBtn}
            source={require('../assets/Icons/backIcon.png')}
          />
        </TouchableOpacity>
        <View style={styles.titleImgContainer}>
          <Image source={getImageSource(image)} />
        </View>
      </View>
      <View style={styles.lowerview}>
        <View style={styles.bottomGrp}>
          <Text style={styles.titleTxt}>{title}</Text>
        </View>
        <View style={styles.mainContent}>{CustomView}</View>
        <View style={styles.btnGrp}>
          {isDiscard === true ? (
            <TouchableOpacity style={styles.disBtn}>
              <Text style={styles.disBtnTxt}>Bỏ qua</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {(value && value > 0) || value === -1 ? (
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={styles.nextBtnTxt}>Tiếp theo</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.nextBtn, {backgroundColor: 'gray'}]}
              disabled>
              <Text style={styles.nextBtnTxt}>Tiếp theo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF90D6',
  },

  upperview: {
    position: 'relative',
    alignItems: 'flex-start',
    flex: 0.25,
    top: 40,
  },
  lowerview: {
    flex: 1.75,
    alignItems: 'center',
    backgroundColor: '#221E3D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  bottomGrp: {
    alignItems: 'center',
    marginTop: 70,
  },
  backBtn: {
    width: 30,
    height: 40,
    marginLeft: 20,
  },
  titleImgContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative',
    bottom: 30,
  },
  backBtnOpa: {
    zIndex: 2,
  },
  titleTxt: {
    width: width,
    fontSize: 20,
    color: '#E5CFEF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 19,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    fontWeight: '800',
    borderBottomColor: '#3E3C62C4',
  },
  mainContent: {
    marginTop: 30,
  },
  btnGrp: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    rowGap: 10,
  },
  disBtn: {
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5CFEF',
  },
  nextBtn: {
    backgroundColor: '#E5CFEF',
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disBtnTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E5CFEF',
  },
  nextBtnTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#221E3D',
  },
});

export default QuestionPageLayout;
