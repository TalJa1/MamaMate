/* eslint-disable prettier/prettier */
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

const {width} = Dimensions.get('window');
const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

interface CarouselItems {
  title: string;
  icon: any;
  description: string;
}

interface ImgMode {
  mode: number;
}

const OnboardingPage = () => {
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
        return <Image source={require('../assets/momAndchild.png')} />;
      case 2:
        return <Image source={require('../assets/yoga.png')} />;
      case 3:
        return <Image source={require('../assets/bath.png')} />;
      case 4:
        return <Image source={require('../assets/child.png')} />;
      default:
        return <Image source={require('../assets/IsolationMode.png')} />;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        {/* <Image source={require('../assets/IsolationMode.png')} /> */}
        {renderContent()}
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
          <TouchableOpacity onPress={() => console.log('Discard pressed')}>
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
  pagging: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  discardView: {
    marginBottom: 40,
  },
  discardTxt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: '#A0A0A0',
  },
});

export default OnboardingPage;
