/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/customHook';
import {vh, vw} from '../../styles/stylesheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import DayMonthSwitchComponent from '../../components/DayMonthSwitchComponent';
import BarChartComponent from '../../components/BarChartComponent';
import LineChartComponent from '../../components/LineChartComponent';

const data = {
  labels: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
  datasets: [
    {
      data: [40, 50, 50, 50, 70, 0, 0, 0, 0, 0],
      colors: [
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#96C1DE`,
      ],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#221E3D',
  backgroundGradientTo: '#221E3D',
  fillShadowGradientOpacity: 1,
  color: () => `#997CBD`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  barRadius: 10,
};

const lineData = {
  labels: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
  datasets: [
    {
      data: [15, 30, 50, 50, 70, 0, 0, 0, 0, 0],
    },
  ],
};

const lineChartConfig = {
  backgroundGradientFrom: '#221E3D',
  backgroundGradientTo: '#221E3D',
  fillShadowGradientOpacity: 1,
  color: () => `#EAE1EE`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  useShadowColorFromDataset: false,
};

const WeightTrackingPage = () => {
  const [isMonth, setIsMonth] = React.useState<boolean>(true);
  useStatusBar('#221E3D');

  return (
    <SafeAreaView style={styles.container}>
      <DayMonthSwitchComponent isMonth={isMonth} setIsMonth={setIsMonth} />
      <ScrollView>
        {isMonth ? (
          <BarChartComponent data={data} chartConfig={chartConfig} />
        ) : (
          <LineChartComponent data={lineData} chartConfig={lineChartConfig} />
        )}
        {renderMomInfo()}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderMomInfo = () => {
  return (
    <View>
      <View style={styles.updateBtnContainer}>
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.updateBtnTxT}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.dataContainerGrp}>
          <Text style={styles.dataContainerTitle}>Trước bầu</Text>
          <Text style={styles.dataContainerDes}>50 kg</Text>
        </View>
        <View style={styles.dataContainerGrp}>
          <Text style={[styles.dataContainerTitle, {color: '#96C1DE'}]}>
            Hiện tại
          </Text>
          <Text style={[styles.dataContainerDes, {color: '#96C1DE'}]}>
            60 kg
          </Text>
        </View>
        <View style={styles.dataContainerGrp}>
          <Text style={styles.dataContainerTitle}>Mong muốn</Text>
          <Text style={styles.dataContainerDes}>65 kg</Text>
        </View>
      </View>
    </View>
  );
};

export default WeightTrackingPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221E3D',
    flex: 1,
  },
  updateBtnContainer: {
    width: vw(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vh(3),
  },
  updateBtn: {
    width: vw(90),
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#EAE1EE',
  },
  updateBtnTxT: {
    textAlign: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    width: vw(100),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dataContainerGrp: {
    width: vw(33),
    rowGap: vh(2),
  },
  dataContainerTitle: {
    color: '#EAE1EE',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  dataContainerDes: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontWeight: '700',
    fontSize: 16,
  },
});
