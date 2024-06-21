/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
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
        <Text>H</Text>
        <Image source={require('../assets/questionsAssets/yoga1.png')} />
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
    backgroundColor: '#221E3D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  img: {
    position: 'relative',
    bottom: 0,
    opacity: 0.5,
  },
});

export default QuestionPage;
