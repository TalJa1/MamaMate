/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/customHook';
import {BarChart} from 'react-native-chart-kit';
import {vw} from '../../styles/stylesheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import DayMonthSwitchComponent from '../../components/DayMonthSwitchComponent';

const data = {
  labels: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
  datasets: [
    {
      data: [40, 50, 50, 50, 70, 80, 0, 0, 0, 0],
      colors: [
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#AF90D6`,
        () => `#997CBD`,
      ],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#221E3D',
  backgroundGradientTo: '#221E3D',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  barRadius: 10,
};

const WeightTrackingPage = () => {
  const [isMonth, setIsMonth] = React.useState<boolean>(true);
  useStatusBar('#221E3D');

  return (
    <SafeAreaView style={styles.container}>
      <DayMonthSwitchComponent isMonth={isMonth} setIsMonth={setIsMonth} />
      {isMonth ? (
        <View>
          <BarChart
            data={data}
            width={vw(100)}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero
            showValuesOnTopOfBars={false}
            withInnerLines={false}
            showBarTops={false}
          />
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default WeightTrackingPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221E3D',
    flex: 1,
  },
});
