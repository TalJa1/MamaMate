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
import ComponentRest2 from '../components/ComponentRest2';
import ComponentRest3 from '../components/ComponentRest3';
import ComponentRest4 from '../components/ComponentRest4';
import {vh, vw} from '../styles/stylesheet';
import {backIconSVG} from '../assets/svgXml';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../services/customHook';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('window');

const RestScreenPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [layoutIndex, setLayoutIndex] = React.useState<number>(1);

  const handlePagination = () => {
    if (layoutIndex < 4) {
      setLayoutIndex(pre => pre + 1);
    } else {
      navigation.navigate('RestScreenLast');
    }
  };

  const renderItem = () => {
    switch (layoutIndex) {
      case 1:
        return <ComponentRest1 />;
      case 2:
        return <ComponentRest2 />;
      case 3:
        return <ComponentRest3 />;
      case 4:
        return <ComponentRest4 />;
    }
  };
  useStatusBar('#96C1DE');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperview}>
        {layoutIndex === 1 ? (
          <View style={styles.imageHalf}>
            <Image source={require('../assets/halfTimetable.png')} />
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={styles.backBtnOpa}
          onPress={() => {
            if (layoutIndex > 1) {
              setLayoutIndex(pre => pre - 1);
            } else {
              navigation.goBack();
            }
          }}>
          {backIconSVG(vw(6), vh(6))}
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>{renderItem()}</View>

      <View style={styles.btnGrp}>
        {layoutIndex === 1 ? (
          <TouchableOpacity style={styles.disBtn}>
            <Text style={styles.disBtnTxt}>Tính lại</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.disBtn}
            // onPress={() => {
            //   setLayoutIndex(pre => pre - 1);
            // }}
          >
            <Text style={styles.disBtnTxt}>Bỏ qua</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.nextBtn} onPress={handlePagination}>
          <Text style={styles.nextBtnTxt}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    height: vh(10),
  },
  mainContent: {
    marginTop: vh(3),
    width: width,
    alignItems: 'center',
  },
  backBtnOpa: {
    zIndex: 1,
    position: 'relative',
    top: vh(3),
    left: vw(8),
  },
  btnGrp: {
    position: 'absolute',
    bottom: vh(5),
    width: width,
    alignItems: 'center',
    rowGap: vh(1),
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
