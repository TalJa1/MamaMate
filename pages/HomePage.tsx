/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../styles/stylesheet';
import {fetusSVG, plusSVG, pregnancySVG} from '../assets/svgXml';
import homeChoices from '../data/homeChoices.json';
import {getHomeImageSource} from '../services/imageHelper';

const HomePage = () => {
  const [currentWeek, setCurrentWeek] = React.useState<number>(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.firstTxt}>Tuần thai hiện tại:</Text>
        <ScrollView horizontal>
          {Array.from({length: 41}, (_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCurrentWeek(index + 1)}
              style={[
                styles.currentWeekGrp,
                currentWeek === index + 1
                  ? {backgroundColor: '#96C1DE'}
                  : {backgroundColor: '#322C56'},
              ]}>
              <Text style={styles.currentWeekGrpTxt}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.firstTxt}>Bé Kít</Text>
        <View style={styles.childInfoGrp}>
          <View style={styles.leftChildInfo}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.childInfoTxtTitle}>
                Ngày chào đời dự kiến
              </Text>
              <Text style={styles.childInfoDate}>21/12/2024</Text>
            </View>
            {fetusSVG(110, 110)}
            <View>
              <Text style={styles.childInfoTxtTitle}>Tuổi thai</Text>
              <View style={styles.childInfoWeekdate}>
                <Text style={styles.childInfoDate}>{currentWeek}</Text>
                <Text>tuần</Text>
                <Text style={styles.childInfoDate}>00</Text>
                <Text>ngày</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightChildInfo}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.childInfoTxtTitle}>Kích thước</Text>
              <Text style={styles.childInfoDate}>Quả mâm xôi</Text>
            </View>
            <Image source={require('../assets/rasberry.png')} />
            <View style={styles.rightChildehiAndWei}>
              <View>
                <Text style={styles.rightChildehiAndWeiTitle}>Cao</Text>
                <Text style={styles.rightChildehiAndWeiTxt}>1 - 1.5 cm</Text>
              </View>
              <View>
                <Text style={styles.rightChildehiAndWeiTitle}>Nặng</Text>
                <Text style={styles.rightChildehiAndWeiTxt}>0.8 - 1.2 kg</Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView horizontal>
          {homeChoices.map((v: any, i: number) => (
            <View key={i} style={styles.imgChoiceGrpContainer}>
              <Text style={styles.imgChoiceGrpTxt}>{v.title}</Text>
              <Image
                style={styles.imgChoiceGrp}
                source={getHomeImageSource(v.img)}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.momFeeling}>
          <View style={styles.momFeelingleft}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
              Hôm nay mẹ bầu cảm thấy thế nào?
            </Text>
            <Text style={{color: '#A283C8', fontSize: 12, fontWeight: '400'}}>
              ghi lại tâm trạng
            </Text>
          </View>
          <View style={styles.momFeelingright}>
            <View style={styles.plusStyle}>
              {plusSVG(vw(5), vh(5), '#E5CFEF')}
            </View>
            {pregnancySVG(100, 100)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw(3),
    backgroundColor: '#221E3D',
    flex: 1,
    paddingTop: vh(1),
  },
  firstTxt: {
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
    paddingLeft: vw(2),
  },
  currentWeekGrp: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginRight: vw(1),
    marginVertical: vh(2),
  },
  currentWeekGrpTxt: {
    color: 'white',
  },
  childInfoGrp: {
    marginVertical: vh(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftChildInfo: {
    backgroundColor: '#96C1DE',
    height: 240,
    width: vw(40),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rightChildInfo: {
    backgroundColor: '#E5CFEF',
    height: 240,
    width: vw(46),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  childInfoWeekdate: {
    flexDirection: 'row',
    width: vw(40),
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  childInfoTxtTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5784A1',
    textAlign: 'center',
  },
  childInfoDate: {
    color: '#221E3D',
    fontSize: 16,
    fontWeight: '700',
  },
  rightChildehiAndWei: {
    flexDirection: 'row',
    color: '#221E3D',
    fontSize: 12,
    width: vw(43),
    fontWeight: '400',
    justifyContent: 'space-evenly',
  },
  rightChildehiAndWeiTxt: {
    textAlign: 'center',
    color: '#221E3D',
    fontWeight: '700',
    fontSize: 14,
  },
  rightChildehiAndWeiTitle: {
    textAlign: 'center',
  },
  imgChoiceGrpContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: vw(3),
  },
  imgChoiceGrp: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#E5CFEF8C',
    borderRadius: 98,
  },
  imgChoiceGrpTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: '#221E3D',
    position: 'absolute',
    zIndex: 1,
    textAlign: 'center',
  },
  momFeeling: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusStyle: {
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5CFEF38',
  },
  momFeelingleft: {
    width: vw(45),
  },
  momFeelingright: {
    width: vw(45),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    columnGap: vw(2),
  },
});
