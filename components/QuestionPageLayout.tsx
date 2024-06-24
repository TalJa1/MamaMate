/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getImageSource} from '../services/imageHelper';

const {width, height} = Dimensions.get('window');

interface RenderLayout {
  image: string;
  title: string;
  CustomView?: ReactNode;
  isDiscard?: boolean;
  // Get the user's choice => can be null
  value?: number;
  // Name of navigation page
  nextPage: string;
}

const QuestionPageLayout: React.FC<RenderLayout> = ({
  image,
  title,
  CustomView,
  isDiscard,
  value = -1,
  nextPage,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handlePagination = () => {
    if (value === -1) {
    }

    if (value && value > 0 && value <= 4) {
      navigation.navigate(nextPage, {value});
    }

    if (value === 5) {
      navigation.navigate(nextPage);
    }
  };

  const handleDiscardPagination = () => {
    navigation.navigate(nextPage);
  };

  return (
    <ScrollView style={styles.container}>
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
        <ScrollView>
          <View style={styles.bottomGrp}>
            <Text style={styles.titleTxt}>{title}</Text>
          </View>
          <View style={styles.mainContent}>{CustomView}</View>
        </ScrollView>
      </View>
      <View style={styles.btnGrp}>
        {isDiscard === true ? (
          <TouchableOpacity
            style={styles.disBtn}
            onPress={handleDiscardPagination}>
            <Text style={styles.disBtnTxt}>Bỏ qua</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {(value && value > 0) || value === -1 ? (
          <TouchableOpacity style={styles.nextBtn} onPress={handlePagination}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#AF90D6',
  },

  upperview: {
    position: 'relative',
    alignItems: 'flex-start',
    height: 120,
    top: 40,
  },
  lowerview: {
    height: height - 120 - 140,
    alignItems: 'center',
    backgroundColor: '#221E3D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  btnGrp: {
    height: 140,
    width: width,
    backgroundColor: '#221E3D',
    alignItems: 'center',
    rowGap: 10,
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
    width: width,
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
