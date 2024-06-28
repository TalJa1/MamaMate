/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../services/customHook';
import {vh, vw} from '../styles/stylesheet';
import {getTrackingImageSource} from '../services/imageHelper';
import LinearGradient from 'react-native-linear-gradient';

const TrackingPage = () => {
  useStatusBar('#221E3D');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titleTxT}>Bộ đo</Text>
        <View style={styles.trackingTopField}>
          <TrackingField img="weight" label="Cân nặng" />
          <TrackingField img="belly" label="Vòng bụng" />
          <TrackingField img="smilingFace" label="Tinh thần" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface TrackingFieldModel {
  img: string;
  label: string;
}

const TrackingField: React.FC<TrackingFieldModel> = ({img, label}) => {
  return (
    <View style={styles.trackingFieldContainer}>
      <LinearGradient
        colors={['#AF90D6', '#5C4B70']}
        style={styles.trackingFieldImgContainer}>
        <Image source={getTrackingImageSource(img)} />
      </LinearGradient>
      <Text style={styles.trackingFieldTxT}>{label}</Text>
    </View>
  );
};

export default TrackingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
    paddingVertical: vh(2),
  },
  titleTxT: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  trackingFieldContainer: {
    width: vw(25),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  trackingFieldImgContainer: {
    height: 87,
    width: 87,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  trackingFieldTxT: {
    color: '#EAE1EE',
    fontSize: 18,
    fontWeight: '400',
  },
  trackingTopField: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: vw(100),
  },
});
