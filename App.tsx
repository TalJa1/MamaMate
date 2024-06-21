/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import OnboardingPage from './pages/OnboardingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionPage from './pages/QuestionPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Question" component={QuestionPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <OnboardingPage />
  );
};

export default App;
