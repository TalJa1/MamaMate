/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vh, vw} from '../../styles/stylesheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/customHook';

const ContractionsPage = () => {
  useStatusBar('#19162E');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainerGrp}>
        <Text style={styles.imgTxT}>90</Text>
        <TouchableOpacity style={styles.imgContainerGrpImg}>
          <Image source={require('../../assets/MOVE1.png')} />
        </TouchableOpacity>
        <Text style={styles.imgTxT}>30</Text>
      </View>
      <Text style={styles.imgTxT}>60</Text>
      <View style={styles.desTxTContainer}>
        <Text style={styles.desTxT}>Nhấp vào nút trên khi cơn gò bắt đầu</Text>
      </View>
      <View style={styles.historyGrp}>
        <ScrollView>
          <Text style={{color: '#EAE1EE', fontWeight: '700', fontSize: 18}}>
            Lịch sử
          </Text>
          <View style={styles.historyGrpTitle}>
            <View style={styles.historyGrpTitleContainer}>
              <Text style={styles.historyGrpTitleTxT}>Thời gian</Text>
            </View>
            <View style={styles.historyGrpTitleContainer}>
              <Text style={styles.historyGrpTitleTxT}>Kéo dài</Text>
            </View>
            <View style={styles.historyGrpTitleContainer}>
              <Text style={styles.historyGrpTitleTxT}>Số lần</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ContractionsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
  imgContainerGrp: {
    width: vw(100),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: vh(2),
  },
  imgTxT: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontWeight: '700',
    fontSize: 18,
  },
  imgContainerGrpImg: {
    alignSelf: 'auto',
  },
  desTxT: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#EAE1EE',
  },
  desTxTContainer: {
    marginVertical: vh(3),
  },
  historyGrp: {
    flex: 1,
    backgroundColor: '#19162E',
    paddingVertical: vh(2),
    paddingHorizontal: vw(2),
  },
  historyGrpTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw(100),
    marginTop: vh(2),
  },
  historyGrpTitleContainer: {
    width: vw(33),
  },
  historyGrpTitleTxT: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '700',
  },
});
