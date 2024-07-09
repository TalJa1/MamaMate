/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryEntry} from '../../services/typeProps';
import {loadData} from '../../data/storage';
import {getDateTime} from '../../services/dayTimeService';
import useStatusBar from '../../services/customHook';
import {vh, vw} from '../../styles/stylesheet';

type DiaryUpdateRouteParams = {
  index: number;
};

const DiaryUpdatePage = () => {
  useStatusBar('#19162E');
  const route =
    useRoute<RouteProp<{params: DiaryUpdateRouteParams}, 'params'>>();
  const {index} = route.params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [entry, setEntry] = React.useState<DiaryEntry | null>(null);
  const currentMonth = getDateTime('month');
  console.log(entry);

  React.useEffect(() => {
    loadData<DiaryEntry[]>('diaryWeekData').then(data => {
      if (data && data[index]) {
        setEntry(data[index]);
      }
    });
  }, [index]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pageLayout}>
          <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
            {entry?.date} tháng {currentMonth.toLocaleString()} (Ngày 101)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiaryUpdatePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19162E',
    flex: 1,
  },
  pageLayout: {
    paddingHorizontal: vw(4),
    paddingVertical: vh(2),
  },
});
