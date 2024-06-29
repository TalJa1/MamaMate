/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {LineChart} from 'react-native-chart-kit';
import {vw} from '../styles/stylesheet';

type Props = {
  data: ChartData;
  chartConfig: AbstractChartConfig;
};

const LineChartComponent = (props: Props) => {
  return (
    <View>
      <LineChart
        data={props.data}
        width={vw(100)}
        height={256}
        verticalLabelRotation={0}
        chartConfig={props.chartConfig}
        bezier
        withVerticalLines={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
      />
    </View>
  );
};

export default LineChartComponent;
