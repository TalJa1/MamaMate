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
import ComponentRest1 from '../components/ComponentRest1';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

const RestScreenPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [layoutIndex, setLayoutIndex] = React.useState<number>(1);

  const handlePagination = () => {
    navigation.navigate('');
  };

  const handleDiscardPagination = () => {
    navigation.navigate('');
  };

  const renderItem = () => {
    switch (layoutIndex) {
      case 1:
        return <ComponentRest1 />;
      case 2:
        return <ComponentRest1 />;
      case 3:
        return <ComponentRest1 />;
      case 4:
        return <ComponentRest1 />;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {layoutIndex === 1 ? (
        <View style={styles.imageHalf}>
          <Image source={require('../assets/halfTimetable.png')} />
        </View>
      ) : (
        <></>
      )}
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
      </View>
      <View style={styles.mainContent}>{renderItem()}</View>

      <View style={styles.btnGrp}>
        {layoutIndex === 1 ? (
          <TouchableOpacity
            style={styles.disBtn}
            onPress={handleDiscardPagination}>
            <Text style={styles.disBtnTxt}>Tính lại</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.disBtn}
            onPress={handleDiscardPagination}>
            <Text style={styles.disBtnTxt}>Bỏ qua</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.nextBtn} onPress={handlePagination}>
          <Text style={styles.nextBtnTxt}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96C1DE',
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
  },
  mainContent: {
    marginTop: 80,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
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
  disBtn: {
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#221E3D',
  },
  nextBtn: {
    backgroundColor: '#221E3D',
    height: 54,
    width: 315,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disBtnTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: '#221E3D',
  },
  nextBtnTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#96C1DE',
  },
});

export default RestScreenPage;
