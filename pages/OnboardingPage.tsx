/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import carousel from '../data/carousel.json';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');
const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

interface CarouselItems {
  title: string;
  icon: any;
  description: string;
}

const OnboardingPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const carouselListRef = React.useRef<FlatList<CarouselItems> | null>();
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const renderItems: React.FC<{item: CarouselItems}> = ({item}) => {
    return (
      <View style={styles.flatliststyle}>
        <Image source={require('../assets/MamaMate.png')} />
        <Text style={styles.titleText}>{item.title}</Text>
        <Image source={require('../assets/heart.png')} />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const onViewRef = React.useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const renderContent = () => {
    switch (currentIndex) {
      case 1:
        return (
          <Image
            style={styles.momAndchild}
            source={require('../assets/momAndchild.png')}
          />
        );
      case 2:
        return (
          <Image style={styles.yoga} source={require('../assets/yoga.png')} />
        );
      case 3:
        return (
          <Image style={styles.bath} source={require('../assets/bath.png')} />
        );
      case 4:
        return (
          <Image style={styles.child} source={require('../assets/child.png')} />
        );
      default:
        return <Image source={require('../assets/IsolationMode.png')} />;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>{renderContent()}</View>
      <View style={styles.lowerview}>
        <FlatList
          horizontal
          data={carousel}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
          ref={ref => {
            carouselListRef.current = ref;
          }}
          style={styles.carousel}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef.current}
        />
        <View style={styles.discardView}>
          <View style={styles.pagging}>
            {carousel.map((v, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.circle,
                  {backgroundColor: i === currentIndex ? 'white' : 'grey'},
                ]}
              />
            ))}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Question')}>
            <Text style={styles.discardTxt}>Bỏ qua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF90D6',
  },
  upperview: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
    zIndex: 2,
  },
  lowerview: {
    flex: 1.4,
    alignItems: 'center',
    backgroundColor: '#221E3D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  flatliststyle: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    rowGap: 16,
    width: width,
    paddingHorizontal: 40,
    marginTop: 100,
  },
  carousel: {
    height: 130,
  },
  titleText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  pagging: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  discardView: {
    marginBottom: 50,
  },
  discardTxt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: '#A0A0A0',
  },
  momAndchild: {
    position: 'relative',
    top: 60,
    height: height / 2.9,
    width: width / 1.9,
  },
  yoga: {
    position: 'relative',
    top: 55,
    width: width,
    height: height / 3.5,
  },
  bath: {
    position: 'relative',
    top: 60,
    width: width / 1.1,
    height: height / 2.8,
  },
  child: {
    position: 'relative',
    top: 55,
    width: width,
    height: height / 2.5,
  },
});

export default OnboardingPage;
