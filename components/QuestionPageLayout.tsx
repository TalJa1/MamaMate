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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

const QuestionPageLayout = () => {
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
      </View>
      <View style={styles.lowerview}>
        <View style={styles.bottomGrp}>
          <Text>T</Text>
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
    flex: 0.3,
    marginLeft: 20,
    top: 40,
  },

  lowerview: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#221E3D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  bottomGrp: {
    alignItems: 'center',
  },
  backBtn: {
    width: 30,
    height: 40,
  },
});

export default QuestionPageLayout;
