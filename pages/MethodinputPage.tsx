/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';

type MethodInputParams = {
  value: number;
};

type RootStackParamList = {
  MethodInput: MethodInputParams;
};

const MethodinputPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MethodInput'>>();
  const {value} = route.params;

  console.log(value);

  return (
    <View>
      <Text>MethodinputPage</Text>
    </View>
  );
};

export default MethodinputPage;
