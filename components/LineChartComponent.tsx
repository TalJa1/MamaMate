/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {ChartData, Dataset} from 'react-native-chart-kit/dist/HelperTypes';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {LineChart} from 'react-native-chart-kit';
import {vw} from '../styles/stylesheet';

type Props = {
  data: ChartData;
  chartConfig: AbstractChartConfig;
  selectedWeek: number;
};

const LineChartComponent = (props: Props) => {
  const {data, chartConfig, selectedWeek} = props;

  const selectedData: ChartData = {
    labels: data.labels,
    datasets: [
      {
        ...data.datasets[0],
        color: (opacity = 1) => `rgba(234, 225, 238, ${opacity})`, // Original color
      },
      {
        data: data.datasets[0].data.map((value, index) =>
          index === selectedWeek - 1 ? value : 0,
        ),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color for the highlighted point
        strokeWidth: 2,
        withDots: false, // Hide dots for this dataset
      } as Dataset,
    ],
  };
  return (
    <View>
      <LineChart
        data={selectedData}
        width={vw(100)}
        height={256}
        verticalLabelRotation={0}
        chartConfig={chartConfig}
        bezier
        withVerticalLines={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
      />
      {selectedWeek > 0 && (
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: (selectedWeek - 1) * (vw(100) / 41),
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: 12,
              marginRight: 5,
            }}>
            Week {selectedWeek}:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            {data.datasets[0].data[selectedWeek - 1]}kg
          </Text>
        </View>
      )}
    </View>
  );
};

export default LineChartComponent;
