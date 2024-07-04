/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/customHook';
import PregnancyCurrentWeekComponent from '../../../components/PregnancyCurrentWeekComponent';
import LinearGradient from 'react-native-linear-gradient';
import {vh, vw} from '../../../styles/stylesheet';
import {
  formattedDate,
  formattedTomorrow,
  getDateTime,
  getTimeAgoInVietnamese,
} from '../../../services/dayTimeService';
import {
  seenWishListData,
  wishListTodayData,
  wishListTomorrowData,
} from '../../../services/renderData';
import {
  checkboxSVG,
  nextIconSVG,
  noIconSVG,
  removeIconSVG,
  unCheckboxSVG,
  uncheckGreenSVG,
  watchIconSVG,
  yesIconSVG,
} from '../../../assets/svgXml';

interface RenderWishListToday {
  title: string;
  img: any;
  isCheck: boolean;
  user: string;
}
interface RenderWishListTomorrow {
  title: string;
  isCheck: boolean;
}

interface RenderSeenUser {
  user: string;
  img: any;
  postTime: string;
  isAnswer: boolean;
  isReject: boolean;
}

const WishListPage = () => {
  const [currentWeek, setCurrentWeek] = React.useState<number>(16);
  const [watched, setWatched] = React.useState<number>(8);
  const currentMonth = getDateTime('month');
  useStatusBar('#19162E');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor: '#19162E'}}>
          <PregnancyCurrentWeekComponent
            currentWeek={currentWeek}
            setCurrentWeek={setCurrentWeek}
          />
        </View>
        {renderWishListBox()}
        {renderDate(formattedDate, true)}
        <View style={styles.layout90}>{renderTask(wishListTodayData)}</View>
        <LinearGradient
          colors={[
            '#221E3D',
            '#19162E',
            '#19162E',
            '#19162E',
            '#19162E',
            '#19162E',
            '#221E3D',
          ]}>
          {renderDate(formattedTomorrow, false)}
          <View style={styles.layout90}>
            {renderTomorrowTask(wishListTomorrowData)}
            <View
              style={{
                width: '90%',
                height: 0.5,
                backgroundColor: '#FFFFFF',
                marginVertical: vh(1),
              }}></View>
          </View>
          <View style={styles.layout90}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 5,
                width: '90%',
              }}>
              <View>{watchIconSVG(vw(7), vh(2))}</View>
              <Text style={{color: '#AF90D6', fontSize: 12, fontWeight: '400'}}>
                Đã xem {watched}
              </Text>
            </View>
            <View>{renderSeenUser(seenWishListData)}</View>
            <TouchableOpacity
              style={{
                backgroundColor: '#EAE1EE',
                height: 54,
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
                borderRadius: 30,
              }}>
              <Text style={{color: '#221E3D', fontSize: 16, fontWeight: '700'}}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={{marginBottom: vh(2)}}>
          {renderDreamedMonth(currentMonth.toLocaleString())}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const renderDreamedMonth = (month: string) => {
  const numbers = Array.from({length: 12}, (_, i) => i + 1);
  return (
    <View style={{backgroundColor: '#5784A1', paddingVertical: vh(2)}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#EAE1EE',
            fontSize: 18,
            fontWeight: '700',
          }}>
          THÁNG ƯỚC MUỐN
        </Text>
        <View style={{position: 'absolute', right: 20}}>
          {nextIconSVG(vw(3), vh(2), '#221E3D')}
        </View>
      </View>
      <View style={{marginVertical: vh(2)}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {numbers.map(number => (
            <View
              key={number}
              style={[
                styles.numberContainer,
                number === Number(month) ? {backgroundColor: '#AA3A3A'} : {},
              ]}>
              <Text
                style={[
                  styles.numberText,
                  number === Number(month)
                    ? {color: '#EAE1EE', fontWeight: '700'}
                    : {},
                ]}>
                {number}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: '3%',
          alignItems: 'center',
        }}>
        <View
          style={{
            columnGap: vw(1),
            flexDirection: 'row',
            flexShrink: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 28,
              height: 28,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#221E3D',
            }}
          />
          <Text style={{flexShrink: 1}}>
            Một chuyến du lịch Hàn Quốc của 2 vợ chồng trước khi đón thành viên
            thứ 3
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#221E3D',
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
            height: 38,
            borderRadius: 10,
          }}>
          <Text style={{fontWeight: '400', color: '#EAE1EE'}}>29.08</Text>
        </View>
      </View>
    </View>
  );
};

const renderSeenUser = (data: RenderSeenUser[]) => {
  return (
    <View style={{rowGap: vh(2)}}>
      {data.map((v, i) => (
        <View key={i}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: vw(1),
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              <TouchableOpacity>{removeIconSVG(vw(6), vh(3))}</TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: vw(2),
                }}>
                <Image
                  style={{width: 50, height: 50, resizeMode: 'contain'}}
                  source={v.img}
                />
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.seenTxt, {color: '#96C1DE'}]}>
                      @{v.user}
                    </Text>
                    {v.isAnswer ? (
                      v.isReject ? (
                        <Text style={[styles.seenTxt, {color: '#CDCDCD'}]}>
                          {' '}
                          từ chối ước muốn
                        </Text>
                      ) : (
                        <Text style={[styles.seenTxt, {color: '#CDCDCD'}]}>
                          {' '}
                          chấp nhận ước muốn
                        </Text>
                      )
                    ) : (
                      <Text style={[styles.seenTxt, {color: '#CDCDCD'}]}>
                        {' '}
                        muốn tham gia
                      </Text>
                    )}
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#96C1DE',
                        fontWeight: '200',
                      }}>
                      {getTimeAgoInVietnamese(v.postTime)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: vw(1),
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 9,

                  borderColor: '#96C1DE',
                  padding: 4,
                }}>
                <Text style={{color: '#96C1DE', fontWeight: '400'}}>
                  Trả lời
                </Text>
              </TouchableOpacity>
              {v.isAnswer ? (
                <></>
              ) : (
                <View style={{flexDirection: 'row', columnGap: vw(1)}}>
                  <TouchableOpacity>
                    {yesIconSVG(vw(6), vh(3))}
                  </TouchableOpacity>
                  <TouchableOpacity>{noIconSVG(vw(6), vh(3))}</TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          {i < data.length - 1 && (
            <View
              style={{
                borderBottomColor: '#96C1DE',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                marginTop: vh(2),
              }}></View>
          )}
        </View>
      ))}
    </View>
  );
};

const renderDate = (format: string, isToday: boolean) => {
  return (
    <View style={{paddingHorizontal: vw(3), marginBottom: vh(2)}}>
      <Text
        style={[
          styles.todayStyle,
          isToday ? {} : {fontSize: 16, fontWeight: '400'},
        ]}>
        {format}
      </Text>
    </View>
  );
};

const renderTask = (data: RenderWishListToday[]) => {
  return (
    <View style={{width: '90%', rowGap: vh(3)}}>
      {data.map((v, i) => (
        <View
          key={i}
          style={{rowGap: vh(1), width: '100%', overflow: 'hidden'}}>
          <View style={styles.todayDataFlex}>
            {v.isCheck ? (
              <TouchableOpacity>{checkboxSVG(vw(10), vh(6))}</TouchableOpacity>
            ) : (
              <TouchableOpacity>
                {unCheckboxSVG(vw(10), vh(6))}
              </TouchableOpacity>
            )}
            <Text style={styles.todayDataFlexTitle}>{v.title}</Text>
          </View>
          <View style={styles.todayDataFlex}>
            <Image
              style={{width: 40, height: 40, resizeMode: 'contain'}}
              source={v.img}
            />
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.todayDataFlexDes, {color: '#96C1DE'}]}>
                @{v.user}
              </Text>
              {v.isCheck ? (
                <Text style={styles.todayDataFlexDes}>
                  {' '}
                  đã thực hiện ước muốn này
                </Text>
              ) : (
                <Text style={styles.todayDataFlexDes}> đã xem</Text>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const renderWishListBox = () => {
  return (
    <View style={styles.gradientFieldContainer}>
      <LinearGradient
        style={styles.gradientField}
        colors={['#081E2A', '#96C1DE']}>
        <View style={[styles.gradientFieldTxTContainer, {width: vw(55)}]}>
          <Text
            style={[
              styles.gradientFieldTxTAlbum,
              {textAlign: 'left', paddingLeft: vw(2)},
            ]}>
            Danh sách ước muốn
          </Text>
          <Text
            style={[
              styles.gradientFieldTxTDes,
              {textAlign: 'left', paddingLeft: vw(2)},
            ]}>
            Hãy tạo một danh sách những điều bạn muốn thực hiện và chia sẻ cùng
            người đồng hành nhé
          </Text>
        </View>
        <View
          style={[
            styles.gradientFieldImgContainer,
            {width: vw(35), alignItems: 'flex-end'},
          ]}>
          <Image source={require('../../../assets/hashtagAndHeart.png')} />
        </View>
      </LinearGradient>
    </View>
  );
};

const renderTomorrowTask = (data: RenderWishListTomorrow[]) => {
  return (
    <View style={{width: '90%', rowGap: vh(3)}}>
      {data.map((v, i) => (
        <View
          key={i}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(2),
          }}>
          {v.isCheck ? (
            <TouchableOpacity>
              {uncheckGreenSVG(vw(10), vh(6))}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              {uncheckGreenSVG(vw(10), vh(6))}
            </TouchableOpacity>
          )}
          <Text
            style={{
              flexShrink: 1,
              color: '#EAE1EE',
              fontSize: 16,
              fontWeight: '700',
            }}>
            {v.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default WishListPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221E3D',
    flex: 1,
  },
  gradientField: {
    height: 145,
    width: vw(90),
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  gradientFieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vh(2),
  },
  gradientFieldImgContainer: {
    width: vw(40),
  },
  gradientFieldTxTContainer: {
    width: vw(50),
    paddingRight: vw(3),
    justifyContent: 'center',
    rowGap: vh(1),
  },
  gradientFieldTxTAlbum: {
    textAlign: 'right',
    color: '#EAE1EE',
    fontSize: 18,
    fontWeight: '700',
  },
  gradientFieldTxTDes: {
    textAlign: 'right',
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '400',
  },
  todayStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  todayDataFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  todayDataFlexTitle: {
    color: '#EAE1EE',
    fontSize: 14,
    fontWeight: '400',
    flexShrink: 1,
  },
  todayDataFlexDes: {
    color: '#CDCDCD',
    fontSize: 12,
    fontWeight: '400',
  },
  layout90: {
    width: vw(100),
    alignItems: 'center',
    rowGap: vh(2),
    marginBottom: vh(2),
  },
  seenTxt: {
    fontSize: 12,
    fontWeight: '400',
  },
  numberContainer: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#96C1DE',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  numberText: {
    color: '#313131',
    fontSize: 18,
    fontWeight: '400',
  },
});
