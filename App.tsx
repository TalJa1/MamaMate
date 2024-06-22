import React from 'react';
import OnboardingPage from './pages/OnboardingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionPage from './pages/QuestionPage';
import Question2Page from './pages/Question2Page';

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
      </Stack.Navigator>
    </NavigationContainer>
    // <OnboardingPage />
  );
};

export default App;
