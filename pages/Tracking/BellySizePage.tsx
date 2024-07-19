/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/customHook';
import {vh, vw} from '../../styles/stylesheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import DayMonthSwitchComponent from '../../components/DayMonthSwitchComponent';
import BarChartComponent from '../../components/BarChartComponent';
import LineChartComponent from '../../components/LineChartComponent';
import {
  barChartDataBelly as defaultBarChartBellyData,
  lineChartDataBelly as defaultLineChartBellyData,
  getDiaryWeekData,
} from '../../services/renderData';
import {RouteProp, useRoute} from '@react-navigation/native';
import {loadData, saveData, updateData} from '../../data/storage';
import {DiaryEntry} from '../../services/typeProps';

interface DataRender {
  labels: string[];
  datasets: {
    data: number[];
  }[];
}

const chartConfig = {
  backgroundGradientFrom: '#221E3D',
  backgroundGradientTo: '#221E3D',
  fillShadowGradientOpacity: 1,
  color: () => `#997CBD`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  barRadius: 10,
};

const lineChartConfig = {
  backgroundGradientFrom: '#221E3D',
  backgroundGradientTo: '#221E3D',
  fillShadowGradientOpacity: 1,
  color: () => `#EAE1EE`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  useShadowColorFromDataset: false,
};

type DiaryUpdateRouteParams = {
  updateItemIndex: number;
};

const BellySizePage = () => {
  useStatusBar('#221E3D');
  const route =
    useRoute<RouteProp<{params: DiaryUpdateRouteParams}, 'params'>>();
  const {updateItemIndex} = route.params;
  const [isMonth, setIsMonth] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [selectedWeek, setSelectedWeek] = React.useState<number>(16);

  const [data, setData] = React.useState(defaultBarChartBellyData);
  const [lineData, setLineData] = React.useState(defaultLineChartBellyData);
  const [diaryData, setDiaryData] = React.useState<DiaryEntry[]>([]);

  React.useEffect(() => {
    const loadDataFromStorage = async () => {
      try {
        const storedBarChartData = await loadData<DataRender>(
          'barChartBellyData',
        );
        const storedLineChartData = await loadData<DataRender>(
          'lineChartBellyData',
        );
        const loadedData = await loadData<DiaryEntry[]>('diaryWeekData');

        if (loadedData) {
          setDiaryData(loadedData);
        } else {
          const initialData = getDiaryWeekData();
          await saveData('diaryWeekData', initialData);
          setDiaryData(initialData);
        }

        const updatedBellySize = loadedData[updateItemIndex].bellySize;

        if (storedBarChartData) {
          storedBarChartData.datasets[0].data[5] = updatedBellySize;
          setData(storedBarChartData);
        } else {
          const updatedBarChartData = {...defaultBarChartBellyData};
          updatedBarChartData.datasets[0].data[5] = updatedBellySize;
          await saveData('barChartBellyData', updatedBarChartData);
          setData(updatedBarChartData);
        }

        if (storedLineChartData) {
          storedLineChartData.datasets[0].data[15] = updatedBellySize;
          setLineData(storedLineChartData);
        } else {
          const updatedLineChartData = {...defaultLineChartBellyData};
          updatedLineChartData.datasets[0].data[15] = updatedBellySize;
          await saveData('lineChartBellyData', updatedLineChartData);
          setLineData(updatedLineChartData);
        }
      } catch (error) {
        console.error('Error loading data from storage:', error);
        setData(defaultBarChartBellyData);
        setLineData(defaultLineChartBellyData);
        const initialData = getDiaryWeekData();
        await saveData('diaryWeekData', initialData);
        setDiaryData(initialData);
      }
    };

    loadDataFromStorage();
  }, [updateItemIndex]);

  const handleSelectWeek = (week: number) => {
    setSelectedWeek(week);
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const updateDiaryData = async (value: number) => {
    try {
      const updatedDiaryData = [...diaryData];
      if (updatedDiaryData[updateItemIndex]) {
        updatedDiaryData[updateItemIndex].bellySize = value;
      }

      await updateData('diaryWeekData', updatedDiaryData);
      setDiaryData(updatedDiaryData);
      console.log('Diary week data updated successfully');
    } catch (error) {
      console.error('Error updating diary week data:', error);
    }
  };

  const handleUpdate = async (index: number, value: number) => {
    setData(prevData => {
      const updatedDatasets = [...prevData.datasets];
      const updatedData = [...updatedDatasets[0].data];
      updatedData[index] = value;
      updatedDatasets[0] = {...updatedDatasets[0], data: updatedData};

      const updatedDataRender = {...prevData, datasets: updatedDatasets};

      // Save updated data to storage
      updateData('barChartBellyData', updatedDataRender)
        .then(() => {
          console.log('Bar chart data updated successfully');
          updateDiaryData(value);
        })
        .catch(error => {
          console.error('Error updating bar chart data:', error);
        });

      return updatedDataRender;
    });
  };

  const handleUpdateLine = async (index: number, value: number) => {
    setLineData(prevData => {
      const updatedDatasets = [...prevData.datasets];
      const updatedData = [...updatedDatasets[0].data];
      updatedData[index] = value;
      updatedDatasets[0] = {...updatedDatasets[0], data: updatedData};

      const updatedDataRender = {...prevData, datasets: updatedDatasets};

      // Save updated data to storage
      updateData('lineChartBellyData', updatedDataRender)
        .then(() => {
          console.log('Line chart data updated successfully');
          updateDiaryData(value);
        })
        .catch(error => {
          console.error('Error updating line chart data:', error);
        });

      return updatedDataRender;
    });
  };

  const renderModal = () => {
    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={{color: '#322C56', fontWeight: '700', fontSize: 18}}>
              Nhập vòng bụng hiện tại
            </Text>
            {isMonth ? (
              <Text style={styles.modalTxTGrp}>
                Gần nhất: {data.datasets[0].data[4]}cm
              </Text>
            ) : (
              <Text style={styles.modalTxTGrp}>
                Gần nhất: {lineData.datasets[0].data[14]}cm
              </Text>
            )}
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (inputValue !== '') {
                    const newValue = (Number(inputValue) - 0.1).toFixed(1);
                    setInputValue(newValue);
                  }
                }}
                style={styles.btnChangeWeight}>
                <Text style={styles.modalTxTGrp}>-100mm</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: '#221E3D',
                    textAlignVertical: 'center',
                    marginLeft: '5%',
                  }}>
                  cm
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (inputValue !== '') {
                    const newValue = (Number(inputValue) + 0.1).toFixed(1);
                    setInputValue(newValue);
                  }
                }}
                style={styles.btnChangeWeight}>
                <Text style={styles.modalTxTGrp}>+100mm</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.modalUpdateBtn}
              onPress={() => {
                if (selectedIndex !== null) {
                  isMonth
                    ? handleUpdate(selectedIndex, Number(inputValue))
                    : handleUpdateLine(selectedIndex, Number(inputValue));
                  setModalVisible(false);
                  setInputValue('');
                  setSelectedIndex(null);
                }
              }}>
              <Text style={styles.updateBtnTxT2}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DayMonthSwitchComponent
        isMonth={isMonth}
        setIsMonth={setIsMonth}
        current={16}
        onSelectWeek={handleSelectWeek}
      />
      <ScrollView>
        {isMonth ? (
          <BarChartComponent data={data} chartConfig={chartConfig} />
        ) : (
          <LineChartComponent
            data={lineData}
            chartConfig={lineChartConfig}
            selectedWeek={selectedWeek}
            isBelly={true}
          />
        )}
        <View style={styles.updateBtnContainer}>
          <TouchableOpacity
            style={styles.updateBtn}
            onPress={() => (isMonth ? openModal(5) : openModal(15))}>
            <Text style={styles.updateBtnTxT}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
        {renderMomInfo(data, isMonth, lineData)}
        {renderModal()}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderMomInfo = (
  dataMonth: DataRender,
  isMonth: boolean,
  dataWeek: DataRender,
) => {
  return (
    <View>
      <View style={styles.dataContainer}>
        <View style={styles.dataContainerGrp}>
          <Text style={styles.dataContainerTitle}>Trước bầu</Text>
          <Text style={styles.dataContainerDes}>70 cm</Text>
        </View>
        <View style={styles.dataContainerGrp}>
          <Text style={[styles.dataContainerTitle, {color: '#96C1DE'}]}>
            Hiện tại
          </Text>
          {isMonth ? (
            <Text style={[styles.dataContainerDes, {color: '#96C1DE'}]}>
              {dataMonth.datasets[0].data[5] === 0
                ? dataMonth.datasets[0].data[4]
                : dataMonth.datasets[0].data[5]}{' '}
              cm
            </Text>
          ) : (
            <Text style={[styles.dataContainerDes, {color: '#96C1DE'}]}>
              {dataWeek.datasets[0].data[15] === 0
                ? dataWeek.datasets[0].data[14]
                : dataWeek.datasets[0].data[15]}{' '}
              cm
            </Text>
          )}
        </View>
        <View style={styles.dataContainerGrp}>
          <Text style={styles.dataContainerTitle}>Mong muốn</Text>
          <Text style={styles.dataContainerDes}>100 cm</Text>
        </View>
      </View>
    </View>
  );
};

export default BellySizePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221E3D',
    flex: 1,
  },
  updateBtnContainer: {
    width: vw(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vh(3),
  },
  updateBtn: {
    width: vw(90),
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#EAE1EE',
  },
  updateBtnTxT: {
    textAlign: 'center',
    color: '#221E3D',
    fontSize: 16,
    fontWeight: '700',
  },
  updateBtnTxT2: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontSize: 16,
    fontWeight: '700',
  },
  dataContainer: {
    flexDirection: 'row',
    width: vw(100),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dataContainerGrp: {
    width: vw(33),
    rowGap: vh(2),
  },
  dataContainerTitle: {
    color: '#EAE1EE',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  dataContainerDes: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontWeight: '700',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#EAE1EE',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    rowGap: vh(2),
  },
  input: {
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: '#322C56',
    textAlign: 'center',
  },
  modalUpdateBtn: {
    marginTop: vh(2),
    backgroundColor: '#221E3D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    width: '90%',
  },
  btnChangeWeight: {
    borderWidth: 1,
    borderColor: '#322C56',
    borderRadius: 10,
    paddingVertical: vh(1),
    paddingHorizontal: 11,
  },
  modalTxTGrp: {
    color: '#515151',
    fontSize: 16,
    fontWeight: '400',
  },
});
