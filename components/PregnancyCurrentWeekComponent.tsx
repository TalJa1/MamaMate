/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {nextIconSVG} from '../assets/svgXml';
import {vh, vw} from '../styles/stylesheet';

const PregnancyCurrentWeekComponent = () => {
  const [currentWeek, setCurrentWeek] = React.useState<number>(16);

  return (
    <View>
      <View style={styles.topScrollViewLabelGrp}>
        <Text style={styles.topScrollViewLabel}>Tuần thai hiện tại:</Text>
        {nextIconSVG(vw(2), vh(2), '#96C1DE')}
      </View>
      <ScrollView horizontal style={styles.currentWeekGrpContainer}>
        {Array.from({length: 41}, (_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentWeek(index + 1)}
            style={[
              styles.currentWeekGrp,
              currentWeek === index + 1
                ? {backgroundColor: '#96C1DE'}
                : {backgroundColor: '#322C56'},
            ]}>
            <Text style={styles.currentWeekGrpTxt}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PregnancyCurrentWeekComponent;

const styles = StyleSheet.create({
  topScrollViewLabelGrp: {
    flexDirection: 'row',
    width: vw(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(5),
  },
  topScrollViewLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#EAE1EE',
  },
  currentWeekGrp: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginRight: vw(1),
    marginVertical: vh(2),
  },
  currentWeekGrpTxt: {
    color: 'white',
  },
  currentWeekGrpContainer: {
    marginHorizontal: vw(2),
  },
});
