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
} from '../../../services/dayTimeService';
import {
  wishListTodayData,
  wishListTomorrowData,
} from '../../../services/renderData';
import {
  checkboxSVG,
  unCheckboxSVG,
  uncheckGreenSVG,
  watchIconSVG,
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

const WishListPage = () => {
  const [currentWeek, setCurrentWeek] = React.useState<number>(16);
  const [watched, setWatched] = React.useState<number>(8);
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
          
        </View>
      </ScrollView>
    </SafeAreaView>
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
});
