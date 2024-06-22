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
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

const QuestionPage = () => {
  const [momDad, setMomDad] = React.useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSelectMomDad = (value: string) => {
    if (value === 'M') {
      setMomDad('M');
    } else {
      setMomDad('D');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../assets/Icons/backIcon.png')} />
        </TouchableOpacity>
        <Text style={styles.initText}>
          Là bố hay là mẹ đang mong chờ sự ra đời của con vậy ạ?
        </Text>
      </View>
      <View style={styles.lowerview}>
        <View style={styles.choices}>
          <TouchableOpacity
            style={[
              styles.choicesGrp,
              momDad === 'M' ? {opacity: 1} : {opacity: 0.4},
            ]}
            onPress={() => handleSelectMomDad('M')}>
            <Image source={require('../assets/questionsAssets/isMom.png')} />
            <Text style={styles.choicesTxt}>Mẹ nè!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.choicesGrp,
              momDad === 'D' ? {opacity: 1} : {opacity: 0.4},
            ]}
            onPress={() => handleSelectMomDad('D')}>
            <Image source={require('../assets/questionsAssets/isDad.png')} />
            <Text style={styles.choicesTxt}>Bố đây</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomGrp}>
          <TouchableOpacity
            disabled={momDad === ''}
            style={[
              styles.nextBtn,
              momDad === ''
                ? {backgroundColor: 'gray'}
                : {backgroundColor: '#E5CFEF'},
            ]}
            onPress={() => console.log('next Pressed')}>
            <Text style={styles.nextBtnText}>Tiếp theo</Text>
          </TouchableOpacity>
          <Image
            style={styles.img}
            source={require('../assets/questionsAssets/yoga1.png')}
          />
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
    flex: 0.4,
    alignItems: 'center',
    width: width,
    justifyContent: 'space-around',
    paddingHorizontal: 34,
  },
  backBtn: {
    width: width,
    marginLeft: 20,
  },
  initText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 25,
    paddingBottom: 20,
  },
  lowerview: {
    flex: 1.6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#221E3D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  img: {
    opacity: 0.2,
    height: 255,
    width: 310,
  },
  bottomGrp: {
    alignItems: 'center',
  },
  choices: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 80,
  },
  nextBtn: {
    position: 'absolute',
    bottom: 70,
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  nextBtnText: {
    fontSize: 16,
    fontWeight: '700',
  },
  choicesTxt: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: '#AF90D6',
  },
  choicesGrp: {
    rowGap: 14,
  },
});

export default QuestionPage;
