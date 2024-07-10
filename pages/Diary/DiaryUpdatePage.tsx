/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiaryEntry} from '../../services/typeProps';
import {loadData} from '../../data/storage';
import {getDateTime} from '../../services/dayTimeService';
import useStatusBar from '../../services/customHook';
import {vh, vw} from '../../styles/stylesheet';
import {
  cameraIconSVG,
  cancelSVG,
  cruzIconSVG,
  editIconSVG,
  examinationScheduleIconSVG,
  glassOfWaterFullIconSVG,
  glassOfWaterSVGIcon,
  lengthDiaryIconSVG,
  noteIconSVG,
  searchingSVG,
  weightDiaryIconSVG,
} from '../../assets/svgXml';
import {
  moodReasonData,
  sexStatusData,
  StatementData,
} from '../../services/renderData';
import {Searchbar} from 'react-native-paper';

type DiaryUpdateRouteParams = {
  index: number;
};

interface RenderGlassProps {
  filledGlasses: boolean[];
  onGlassClick: (index: number) => void;
}

const DiaryUpdatePage = () => {
  useStatusBar('#19162E');
  const route =
    useRoute<RouteProp<{params: DiaryUpdateRouteParams}, 'params'>>();
  const {index} = route.params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [entry, setEntry] = React.useState<DiaryEntry | null>(null);
  const currentMonth = getDateTime('month');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [filledGlasses, setFilledGlasses] = React.useState<boolean[]>(
    Array(8).fill(false),
  );
  const [selectedMoodReasons, setSelectedMoodReasons] = React.useState<
    string[]
  >([]);
  const [selectedStatements, setSelectedStatements] = React.useState<string[]>(
    [],
  );
  const [selectedSexStatuses, setSelectedSexStatuses] = React.useState<
    string[]
  >([]);

  React.useEffect(() => {
    loadData<DiaryEntry[]>('diaryWeekData').then(data => {
      if (data && data[index]) {
        setEntry(data[index]);
      }
    });
  }, [index]);

  const handleGlassClick = (index1: number) => {
    setFilledGlasses(prevState => {
      const newFilledGlasses = [...prevState];
      newFilledGlasses[index1] = !newFilledGlasses[index1];
      return newFilledGlasses;
    });
  };

  const toggleSelectItem = (
    item: string,
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem !== item),
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderStatusCheckBox = (
    label: string,
    data: String[],
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const handleCancel = (item: string) => {
      toggleSelectItem(item, selectedItems, setSelectedItems);
    };
    return (
      <View style={{rowGap: vh(2), marginTop: vh(2)}}>
        <Text style={{color: '#AF90D6', fontSize: 16, fontWeight: '400'}}>
          {label}
        </Text>
        <Searchbar
          style={styles.textInput}
          icon={() => searchingSVG(vw(5), vh(5))}
          placeholder="Tìm"
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholderTextColor={'#CDCDCD'}
        />
        <View style={styles.selectedContainer}>
          {selectedItems.map((item, indexn) => (
            <View key={indexn} style={styles.selectedCheckbox}>
              <Text style={styles.selectedText}>{item}</Text>
              <TouchableOpacity
                onPress={() => handleCancel(item)}
                style={{
                  height: vw(5),
                  width: vw(5),
                  borderRadius: 30,
                  backgroundColor: '#515151',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0.6,
                }}>
                {cancelSVG(vw(3), vh(2), '#100F11')}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: vw(2),
            rowGap: vh(1),
          }}>
          {data.map((v, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                toggleSelectItem(v.toString(), selectedItems, setSelectedItems)
              }
              style={[
                {
                  borderWidth: 1,
                  borderColor: '#CDCDCD',
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                  borderRadius: 25,
                },
                selectedItems.includes(v.toString())
                  ? {borderColor: '#AF90D6'}
                  : {},
              ]}>
              <Text
                style={[
                  {color: '#CDCDCD', fontWeight: '400', fontSize: 14},
                  selectedItems.includes(v.toString())
                    ? {color: '#AF90D6'}
                    : {},
                ]}>
                {v}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pageLayout}>
          <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
            {entry?.date} tháng {currentMonth.toLocaleString()} (Ngày 101)
          </Text>
          {renderChildInfoBox()}
          {renderMomInfoGrp()}
          <RenderGlass
            filledGlasses={filledGlasses}
            onGlassClick={handleGlassClick}
          />
          {nutriSuggestion()}
          {renderReservation()}
          <View style={{}}>
            <Text style={{color: '#EAE1EE', fontSize: 18, fontWeight: '700'}}>
              Sức khỏe
            </Text>
            <Image
              style={{
                width: vw(100),
                marginHorizontal: vw(-5),
                height: vh(12),
              }}
              // resizeMode="contain"
              source={require('../../assets/Diary/moodGrp.png')}
            />
            <Text
              style={{
                color: '#EAE1EE',
                textAlign: 'center',
                fontWeight: '700',
                marginTop: vh(1),
              }}>
              U sầu
            </Text>
          </View>
          {renderStatusCheckBox(
            'Lý do khiến mẹ có tâm trạng đó?',
            moodReasonData,
            selectedMoodReasons,
            setSelectedMoodReasons,
          )}
          {renderStatusCheckBox(
            'Thể trạng của mẹ hôm nay thế nào?',
            StatementData,
            selectedStatements,
            setSelectedStatements,
          )}
          {renderStatusCheckBox(
            'Hoạt động tình dục',
            sexStatusData,
            selectedSexStatuses,
            setSelectedSexStatuses,
          )}
          <View
            style={{
              backgroundColor: '#382E75',
              padding: vw(3),
              borderRadius: 16,
              marginTop: vh(2),
              rowGap: vh(1),
            }}>
            <View
              style={{
                flexDirection: 'row',
                columnGap: vw(2),
                alignItems: 'center',
              }}>
              {noteIconSVG(vw(8), vh(4))}
              <Text style={{color: '#EAE1EE', fontSize: 18, fontWeight: '700'}}>
                Ghi chú
              </Text>
            </View>
            <TextInput
              numberOfLines={4}
              value={textInputValue}
              onChangeText={newValue => setTextInputValue(newValue)}
              multiline
              style={{
                backgroundColor: '#D9D9D90F',
                borderRadius: 8,
                height: 100,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#EAE1EE',
              borderRadius: 30,
              height: 60,
              justifyContent: 'center',
              marginTop: vh(2),
            }}>
            <Text style={{textAlign: 'center', color: '#EAE1EE', fontSize: 16}}>
              Cập nhật
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const renderReservation = () => {
  return (
    <View style={{marginVertical: vh(2), rowGap: vh(2)}}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(2)}}>
        {examinationScheduleIconSVG(vw(8), vh(4))}
        <Text style={{color: '#EAE1EE', fontSize: 18, fontWeight: '700'}}>
          Lịch khám:
        </Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 42,
            height: 42,
            backgroundColor: '#AF90D6',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {cruzIconSVG(vw(8), vh(4))}
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#EAE1EE',
          fontSize: 16,
          fontWeight: '400',
          textAlign: 'center',
        }}>
        Nhập lịch
      </Text>
    </View>
  );
};

const nutriSuggestion = () => {
  return (
    <View style={{marginTop: vh(2), rowGap: vh(2)}}>
      <Text style={{color: '#EAE1EE', fontSize: 18, fontWeight: '700'}}>
        Dinh dưỡng hôm nay
      </Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 42,
            height: 42,
            backgroundColor: '#AF90D6',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {cruzIconSVG(vw(8), vh(4))}
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#EAE1EE',
          fontSize: 16,
          fontWeight: '400',
          textAlign: 'center',
        }}>
        Nhập thông tin bữa ăn
      </Text>
      <View style={styles.suggestGrp}>
        <View style={styles.suggestGrpTxtContainer}>
          <Text style={styles.suggestGrpTxT}>Gợi ý dinh dưỡng</Text>
        </View>
        <TouchableOpacity style={styles.suggestGrpBtn}>
          <Text style={styles.suggestGrpBtnTxT}>Xem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RenderGlass: React.FC<RenderGlassProps> = ({
  filledGlasses,
  onGlassClick,
}) => {
  const filledCount = filledGlasses.filter(isFilled => isFilled).length;

  return (
    <View
      style={{
        backgroundColor: '#5784A1',
        borderRadius: 10,
        paddingVertical: vh(1),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: vw(2),
        }}>
        <Text>Uống nước</Text>
        <Text>Mục tiêu: {filledCount * 0.25}/2l</Text>
      </View>
      <View style={styles.iconContainer}>
        {filledGlasses.map((isFilled, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onGlassClick(index)}
            style={styles.iconWrapper}>
            {isFilled
              ? glassOfWaterFullIconSVG(vw(8), vh(6))
              : glassOfWaterSVGIcon(vw(8), vh(6))}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const renderMomInfoGrp = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: vh(4),
        marginBottom: vh(2),
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity style={styles.button}>
        {cameraIconSVG(vw(10), vh(5))}
      </TouchableOpacity>
      <View
        style={{height: vh(20), width: '28%', justifyContent: 'space-between'}}>
        {renderMominfoBox('Cân nặng', '60kg', '#AF90D6')}
        {renderMominfoBox('Vòng bụng', '80cm', 'transparent')}
      </View>
      <View style={{height: vh(20), width: '28%', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: -40}}>
          <Image source={require('../../assets/Diary/pregnancy.png')} />
        </View>
        <View
          style={{height: '100%', width: '100%', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={[
              styles.momInfoBox,
              {
                backgroundColor: '#221E3D',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#AF90D6',
              },
            ]}>
            <Text style={{color: '#EAE1EE'}}>Nhiệt độ</Text>
            <Text style={{color: '#221E3D', fontWeight: '700', fontSize: 16}}>
              {cruzIconSVG(vw(6), vh(3), '#EAE1EE')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const renderMominfoBox = (label: string, data: string, backColor: string) => {
  return (
    <TouchableOpacity
      style={[
        styles.momInfoBox,
        {
          backgroundColor: backColor,
          justifyContent: 'space-evenly',
          paddingLeft: '10%',
          borderWidth: 1,
          borderColor: '#AF90D6',
        },
      ]}>
      <Text style={{color: '#EAE1EE'}}>{label}</Text>
      <Text
        style={[
          {fontWeight: '700', fontSize: 16},
          backColor === 'transparent' ? {color: '#AF90D6'} : {color: '#221E3D'},
        ]}>
        {data}
      </Text>
      <View style={{position: 'absolute', right: '5%', top: '5%'}}>
        {editIconSVG(vw(4), vh(2))}
      </View>
    </TouchableOpacity>
  );
};

const renderChildInfoBox = () => {
  return (
    <View style={{marginTop: vh(5), marginBottom: vh(2)}}>
      <View style={styles.childInfoBox}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.childInfoBoxTxT}>Tuổi thai: </Text>
          <Text style={[styles.childInfoBoxTxT, {fontWeight: '700'}]}>
            16 tuần 2 ngày
          </Text>
          <Image
            style={styles.kidImg}
            source={require('../../assets/Diary/kid.png')}
          />
        </View>
        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <View style={styles.childInfoiconGrp}>
            {weightDiaryIconSVG(vw(10), vh(5))}
            <Text style={styles.childInfoiconTxt}>110 gam</Text>
          </View>
          <View style={styles.childInfoBox60}>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                backgroundColor: '#AF90D6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/Diary/quaLe.png')} />
            </View>
          </View>
          <View style={styles.childInfoiconGrp}>
            {lengthDiaryIconSVG(vw(10), vh(5))}
            <Text style={styles.childInfoiconTxt}>17 cm</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', paddingTop: 5}}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#EAE1EE',
                fontWeight: '400',
                fontSize: 14,
              }}>
              Kích thước của Kít tương tự{' '}
              <Text style={{color: '#E5CE7F'}}>một quả Lê</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
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
  childInfoBox: {
    backgroundColor: '#322C56',
    width: '100%',
    height: 232,
    padding: '3%',
    borderRadius: 16,
  },
  childInfoBoxTxT: {
    color: '#FFB9A6',
    fontSize: 16,
  },
  kidImg: {
    height: 106,
    width: 75,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: -50,
  },
  childInfoiconGrp: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childInfoiconTxt: {
    textAlign: 'center',
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '700',
  },
  childInfoBox60: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: vh(20),
    width: '38%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 10, // Adjust this value for more/less blur
    elevation: 10, // Adjust this value for more/less shadow depth
  },
  momInfoBox: {
    width: '100%',
    height: '47%',
    borderRadius: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(2), // Adjust padding if needed
  },
  iconWrapper: {
    marginHorizontal: vw(1), // Adjust margin if needed
  },
  suggestGrp: {
    backgroundColor: '#FFFFFF',
    height: 57,
    width: '100%',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(4),
  },
  suggestGrpTxtContainer: {
    width: '70%',
  },
  suggestGrpTxT: {
    color: '#19162E',
    fontSize: 14,
    fontWeight: '400',
  },
  suggestGrpBtn: {
    width: '30%',
    backgroundColor: '#19162E',
    borderRadius: 50,
    height: '70%',
    justifyContent: 'center',
  },
  suggestGrpBtnTxT: {
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  textInput: {
    width: vw(90),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#CDCDCD80',
  },
  selectedCheckbox: {
    borderColor: '#AF90D6',
    backgroundColor: '#AF90D6', // Light pink background
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderRadius: 25,
    columnGap: vw(1),
    alignItems: 'center',
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: vw(2),
    rowGap: vh(1),
  },
  selectedText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
});
