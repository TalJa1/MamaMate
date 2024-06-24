/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

const RestScreenLastPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [babySize, setBabySize] = React.useState({
    height: 0.1,
    weight: 0.1,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperview}>
        <TouchableOpacity
          style={styles.backBtnOpa}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backBtn}
            source={require('../assets/Icons/backIcon2.png')}
          />
        </TouchableOpacity>
        <View style={styles.titleImgContainer}>
          <Image source={require('../assets/RestAssets/sesameSeeds.png')} />
        </View>
      </View>
      <View style={styles.lowerview}>
        <View style={styles.mainContent}>
          <Text style={styles.titleTxt}>Hiện tại con giống như một:</Text>
          <Text style={styles.desTxt}>“HẠT VỪNG”</Text>
          <Image
            style={styles.heartStyle}
            source={require('../assets/heart.png')}
          />
          <View>
            <Text>Cân nặng: {babySize.weight}kg</Text>
            <Text>Chiều cao: {babySize.height}cm</Text>
          </View>
        </View>

        <View style={styles.btnGrp}>
          <TouchableOpacity style={styles.nextBtn}>
            <Text style={styles.nextBtnTxt}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
    width: width,
  },
  imageHalf: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  upperview: {
    alignItems: 'flex-start',
    top: 40,
    flex: 0.4,
  },
  mainContent: {
    flex: 1.6,
    // marginTop: 120,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
  lowerview: {
    flex: 1.6,
    backgroundColor: '#A283C8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  backBtn: {
    width: 30,
    height: 40,
    marginLeft: 20,
  },
  backBtnOpa: {
    zIndex: 1,
  },
  btnGrp: {
    position: 'absolute',
    bottom: 40,
    width: width,
    alignItems: 'center',
    rowGap: 10,
  },
  titleImgContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative',
    bottom: 0,
  },
  nextBtn: {
    backgroundColor: '#E5CFEF',
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextBtnTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#221E3D',
  },
  titleTxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  desTxt: {
    color: '#221E3D',
    fontWeight: '800',
    fontSize: 24,
  },
  heartStyle: {
    marginVertical: 10,
  },
});

export default RestScreenLastPage;
