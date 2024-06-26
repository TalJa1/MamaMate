/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import OnboardingPage from './pages/OnboardingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import QuestionPage from './pages/QuestionPage';
import Question2Page from './pages/Question2Page';
import MethodinputPage from './pages/MethodinputPage';
import MenstrualcyclePage from './pages/MenstrualcyclePage';
import MedicalhistoryPage from './pages/MedicalhistoryPage';
import MedicationusedPage from './pages/MedicationusedPage';
import RestScreenPage from './pages/RestScreenPage';
import RestScreenLastPage from './pages/RestScreenLastPage';
import HomePage from './pages/HomePage';
import {dateIconSVG, homeIconSVG} from './assets/svgXml';
import {vh, vw} from './styles/stylesheet';
import {StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          // tabBarLabel: '',
          tabBarActiveTintColor: '#E5CFEF',
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
            backgroundColor: '#000000',
            height: vh(7),
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => {
              return focused ? (
                <View style={[styles.container, {width: size}]}>
                  {homeIconSVG(vw(6), vh(6), color)}
                  <View style={[styles.dotStyle, {backgroundColor: color}]} />
                </View>
              ) : (
                <View>{homeIconSVG(vw(6), vh(6), color)}</View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Date"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => {
              return focused ? (
                <View style={[styles.container, {width: size}]}>
                  {dateIconSVG(vw(6), vh(6), color)}
                  <View style={[styles.dotStyle, {backgroundColor: color}]} />
                </View>
              ) : (
                <View>{dateIconSVG(vw(6), vh(6), color)}</View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Time"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => {
              return focused ? (
                <View style={[styles.container, {width: size}]}>
                  {homeIconSVG(vw(6), vh(6), color)}
                  <View style={[styles.dotStyle, {backgroundColor: color}]} />
                </View>
              ) : (
                <View>{homeIconSVG(vw(6), vh(6), color)}</View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Data"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => {
              return focused ? (
                <View style={[styles.container, {width: size}]}>
                  {homeIconSVG(vw(6), vh(6), color)}
                  <View style={[styles.dotStyle, {backgroundColor: color}]} />
                </View>
              ) : (
                <View>{homeIconSVG(vw(6), vh(6), color)}</View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => {
              return focused ? (
                <View style={[styles.container, {width: size}]}>
                  {homeIconSVG(vw(6), vh(6), color)}
                  <View style={[styles.dotStyle, {backgroundColor: color}]} />
                </View>
              ) : (
                <View>{homeIconSVG(vw(6), vh(6), color)}</View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* Main */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* OnBoarding */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingPage}
          options={{headerShown: false}}
        />
        {/* Question screens */}
        <Stack.Screen
          name="Question"
          options={{headerShown: false}}
          component={QuestionPage}
        />
        <Stack.Screen
          name="Question2"
          options={{headerShown: false}}
          component={Question2Page}
        />
        <Stack.Screen
          name="MethodInput"
          options={{headerShown: false}}
          component={MethodinputPage}
        />
        <Stack.Screen
          name="Menstrualcycle"
          options={{headerShown: false}}
          component={MenstrualcyclePage}
        />
        <Stack.Screen
          name="Medicalhistory"
          options={{headerShown: false}}
          component={MedicalhistoryPage}
        />
        <Stack.Screen
          name="Medicalused"
          options={{headerShown: false}}
          component={MedicationusedPage}
        />
        {/* Rest screen */}
        <Stack.Screen
          name="RestScreen"
          options={{headerShown: false}}
          component={RestScreenPage}
        />
        <Stack.Screen
          name="RestScreenLast"
          options={{headerShown: false}}
          component={RestScreenLastPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    height: 7,
    width: 7,
    borderRadius: 7,
  },
});
