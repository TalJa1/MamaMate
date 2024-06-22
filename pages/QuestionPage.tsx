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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

const QuestionPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <Text style={styles.initText}>
          Là bố hay là mẹ đang mong chờ sự ra đời của con vậy ạ?
        </Text>
      </View>
      <View style={styles.lowerview}>
        <View style={styles.choices}>
          <View>
            <Image source={require('../assets/questionsAssets/isMom.png')} />
          </View>
          <View>
            <Image source={require('../assets/questionsAssets/isDad.png')} />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.nextBtn}
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
    justifyContent: 'flex-end',
    paddingHorizontal: 34,
    position: 'relative',
    bottom: 34,
  },
  initText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
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
    backgroundColor: '#E5CFEF',
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default QuestionPage;
