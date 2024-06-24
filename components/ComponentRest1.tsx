/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {childOnHandSVG} from '../assets/svgXml';
import {vh, vw} from '../styles/stylesheet';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {width, height} = Dimensions.get('screen');

const ComponentRest1 = () => {
  return (
    <View>
      <View>
        <Text style={styles.titleTxt}>Ngày sinh dự kiến của mẹ:</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.columnStyle}>
          <Text style={styles.inputTxt}>Ngày</Text>
          <View>
            <View style={styles.btnOpacity}>
              <Text style={styles.timeTxt}>1</Text>
            </View>
          </View>
        </View>
        <Text style={styles.dashed}>-</Text>
        <View style={styles.columnStyle}>
          <Text style={styles.inputTxt}>Tháng</Text>
          <View style={styles.btnOpacity}>
            <Text style={styles.timeTxt}>1</Text>
          </View>
        </View>
        <Text style={styles.dashed}>-</Text>
        <View style={styles.columnStyle}>
          <Text style={styles.inputTxt}>Năm</Text>
          <View style={styles.btnOpacity}>
            <Text style={styles.timeTxt}>2021</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainImg}>{childOnHandSVG(vw(65), vh(40))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    textAlign: 'center',
    color: '#221E3D',
    fontSize: 20,
    fontWeight: '800',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width,
    alignItems: 'center',
    marginTop: vh(3),
  },
  inputTxt: {
    color: '#221E3D',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
  },
  btnOpacity: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTxt: {
    color: '#221E3D',
    fontSize: 36,
    fontWeight: '700',
  },
  dashed: {
    color: '#221E3D',
    position: 'relative',
    top: 15,
  },
  columnStyle: {
    rowGap: vh(1),
  },
  mainImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vh(1),
  },
});

export default ComponentRest1;
