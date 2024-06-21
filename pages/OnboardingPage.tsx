/* eslint-disable prettier/prettier */
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import React from 'react';
import carousel from '../data/carousel.json';

const {width} = Dimensions.get('window');

interface CarouselItems {
  title: string;
  icon: any;
  description: string;
}

const OnboardingPage = () => {
  const carouselListRef = React.useRef<FlatList<CarouselItems> | null>();

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

  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <Image source={require('../assets/IsolationMode.png')} />
      </View>
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
        />
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
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
  },
  lowerview: {
    flex: 1.5,
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
});

export default OnboardingPage;
