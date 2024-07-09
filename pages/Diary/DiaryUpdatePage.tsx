/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryEntry} from '../../services/typeProps';
import {loadData} from '../../data/storage';

type DiaryUpdateRouteParams = {
  index: number;
};

const DiaryUpdatePage = () => {
  const route =
    useRoute<RouteProp<{params: DiaryUpdateRouteParams}, 'params'>>();
  const {index} = route.params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [entry, setEntry] = React.useState<DiaryEntry | null>(null);
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
      <View>
        <Text>DiaryUpdatePage</Text>
      </View>
    </SafeAreaView>
  );
};

export default DiaryUpdatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
