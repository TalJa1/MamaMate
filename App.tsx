import React from 'react';
import OnboardingPage from './pages/OnboardingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionPage from './pages/QuestionPage';
import Question2Page from './pages/Question2Page';
import MethodinputPage from './pages/MethodinputPage';
import MenstrualcyclePage from './pages/MenstrualcyclePage';
import MedicalhistoryPage from './pages/MedicalhistoryPage';
import MedicationusedPage from './pages/MedicationusedPage';
import RestScreenPage from './pages/RestScreenPage';

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
      </Stack.Navigator>
    </NavigationContainer>
    // <OnboardingPage />
  );
};

export default App;
