/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getImageSource} from '../services/imageHelper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

interface RenderLayout {
  image: string;
  title: string;
}

const QuestionPageLayout: React.FC<RenderLayout> = ({image, title}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <TouchableOpacity
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
  titleTxt: {
    width: width,
    fontSize: 20,
    color: '#E5CFEF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 19,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#3E3C62C4',
  },
});

export default QuestionPageLayout;
