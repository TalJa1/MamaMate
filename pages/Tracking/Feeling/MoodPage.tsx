/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/customHook';
import PregnancyCurrentWeekComponent from '../../../components/PregnancyCurrentWeekComponent';
import {vh} from '../../../styles/stylesheet';
import {getMoodProgressIcon} from '../../../services/imageHelper';

const MoodPage = () => {
  useStatusBar('#19162E');
  const [currentWeek, setCurrentWeek] = React.useState<number>(16);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [daysOfWeek, setDaysOfWeek] = React.useState([
    {day: 18, progress: 20},
    {day: 19, progress: 40},
    {day: 20, progress: 60},
    {day: 21, progress: 80},
    {day: 22, progress: 50},
    {day: 23, progress: 70},
    {day: 24, progress: 0},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor: '#19162E'}}>
          <PregnancyCurrentWeekComponent
            currentWeek={currentWeek}
            setCurrentWeek={setCurrentWeek}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
              color: '#EAE1EE',
            }}>
            Tâm trạng tuần thai {currentWeek}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {daysOfWeek.map((day, index) => (
            <View key={index} style={{alignSelf: 'auto'}}>
              {renderProgressBar(day.progress)}
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '400',
                  fontSize: 18,
                  color: '#EAE1EE',
                  marginVertical: 10,
                }}>
                {day.day}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const renderProgressBar = (percentage: number) => {
  const {imageSource, backgroundColor} = getMoodProgressIcon(percentage);
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.progress,
            {height: `${percentage}%`, backgroundColor: backgroundColor},
          ]}>
          <Image source={imageSource} style={styles.progressIcon} />
        </Animated.View>
      </View>
    </View>
  );
};

export default MoodPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
  progressBarContainer: {
    alignItems: 'center',
    marginTop: vh(2),
  },
  progressBar: {
    height: 200,
    width: 20,
    backgroundColor: '#E0E0E0',
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    width: '100%',
    position: 'absolute',
    borderRadius: 10,
    bottom: 0,
  },
  progressIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    resizeMode: 'contain',
    top: 0,
  },
});
