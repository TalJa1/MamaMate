/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/customHook';
import {vh, vw} from '../../styles/stylesheet';

const ChildMovementPage = () => {
  useStatusBar('#19162E');

  const [history, setHistory] = React.useState<
    {count: number; time: number; last: string}[]
  >([
    {count: 40, time: Date.now() - 86400000, last: '12:33'},
    {count: 12, time: Date.now() - 259200000, last: '01:45'},
  ]);
  const [lastPressTime, setLastPressTime] = React.useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [elapsedTime, setElapsedTime] = React.useState<number>(0);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')} Thg ${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}, ${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes(),
    ).padStart(2, '0')}`;
  };

  const formatElapsedTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleCount = () => {
    const now = Date.now();
    const timeSinceLastPress = lastPressTime ? now - lastPressTime : 0;

    if (lastPressTime === null || timeSinceLastPress > 5000) {
      setHistory(prevHistory => [
        {count: 1, time: now, last: '00:00'},
        ...prevHistory,
      ]);
    } else {
      setHistory(prevHistory => {
        const [lastEntry, ...rest] = prevHistory;
        const newEntry = {
          count: lastEntry.count + 1,
          time: lastEntry.time,
          last: formatElapsedTime(now - lastEntry.time),
        };
        return [newEntry, ...rest];
      });
    }

    setLastPressTime(now);
    setElapsedTime(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (lastPressTime) {
      timer = setInterval(() => {
        const now = Date.now();
        const timeElapsed = now - lastPressTime;

        if (timeElapsed >= 5000) {
          clearInterval(timer);
        } else {
          setElapsedTime(timeElapsed);
        }
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [lastPressTime]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainerGrp}>
        <Text style={styles.imgTxT}>90</Text>
        <TouchableOpacity
          style={styles.imgContainerGrpImg}
          onPress={handleCount}>
          <Image source={require('../../assets/MOVE.png')} />
        </TouchableOpacity>
        <Text style={styles.imgTxT}>30</Text>
      </View>
      <Text style={styles.imgTxT}>60</Text>
      <View style={styles.desTxTContainer}>
        <Text style={styles.desTxT}>Nhấp vào bàn chân để bắt đầu đếm</Text>
      </View>
      <View style={styles.historyGrp}>
        <ScrollView>
          <Text style={{color: '#EAE1EE', fontWeight: '700', fontSize: 18}}>
            Lịch sử
          </Text>
          <View style={styles.historyGrpTitle}>
            <View style={styles.historyGrpTitleContainer}>
              <Text style={styles.historyGrpTitleTxT}>Thời gian</Text>
            </View>
            <View style={styles.historyGrpTitleContainer}>
              <Text style={styles.historyGrpTitleTxT}>Kéo dài</Text>
            </View>
            <View style={styles.historyGrpTitleContainer}>
              <Text style={styles.historyGrpTitleTxT}>Số lần</Text>
            </View>
          </View>
          {history.map((entry, index) => (
            <View key={index} style={styles.historyGrpItem}>
              <View style={styles.historyGrpTitleContainer}>
                <Text style={styles.historyGrpItemTxT}>
                  {formatDate(entry.time)}
                </Text>
              </View>
              <View style={styles.historyGrpTitleContainer}>
                <Text style={styles.historyGrpItemTxT}>{entry.last}</Text>
              </View>
              <View style={styles.historyGrpTitleContainer}>
                <Text style={styles.historyGrpItemTxT}>{entry.count}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChildMovementPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
  imgContainerGrp: {
    width: vw(100),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: vh(2),
  },
  imgTxT: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontWeight: '700',
    fontSize: 18,
  },
  imgContainerGrpImg: {
    alignSelf: 'auto',
  },
  desTxT: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#EAE1EE',
  },
  desTxTContainer: {
    marginVertical: vh(3),
  },
  historyGrp: {
    flex: 1,
    backgroundColor: '#19162E',
    paddingVertical: vh(2),
    paddingHorizontal: vw(2),
  },
  historyGrpTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw(100),
    marginTop: vh(2),
  },
  historyGrpTitleContainer: {
    width: vw(33),
  },
  historyGrpTitleTxT: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '700',
  },
  historyGrpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw(100),
    marginTop: vh(2),
  },
  historyGrpItemTxT: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '400',
  },
});
