/* eslint-disable prettier/prettier */
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../services/typeProps';
import {vh, vw} from '../../styles/stylesheet';
import {renderHandBookTitle} from '../../services/renderData';
import {backButtonWithoutArrowSVG} from '../../assets/svgXml';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getHandBookImgDetail} from '../../services/imageHelper';
import {
  commonPregnancyConditions,
  fetalDevelopment,
  givingBirthJourney,
  improveMood,
  physicalExercise,
  smartPrenatalCare,
  stagesOfPregnancy,
} from '../../data/handbook/hanbookData';

type HandBookDetailRouteProp = RouteProp<RootStackParamList, 'HandBookDetail'>;
interface Detail {
  desTitle: string;
  main: string;
  content: string;
}

interface RenderDataItem {
  img: number;
  title: string;
  smallDes: string;
  detail: Detail;
}

const HandBookDetailPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [renderData, setRenderData] = React.useState<RenderDataItem[]>([]);
  const route = useRoute<HandBookDetailRouteProp>();
  const {id} = route.params;

  React.useEffect(() => {
    switch (id) {
      case 0:
        setRenderData(stagesOfPregnancy);
        break;
      case 1:
        setRenderData(smartPrenatalCare);
        break;
      case 2:
        setRenderData(commonPregnancyConditions);
        break;
      case 3:
        setRenderData(fetalDevelopment);
        break;
      case 4:
        setRenderData(givingBirthJourney);
        break;
      case 5:
        setRenderData(improveMood);
        break;
      case 6:
        setRenderData(physicalExercise);
        break;
      default:
        break;
    }
  }, [id]);

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {headerRenderView(id, handleNavigation)}
      <ScrollView>{renderContent(renderData)}</ScrollView>
    </View>
  );
};

const headerRenderView = (id: number, navigate: () => void) => {
  return (
    <View style={styles.headerImgContainer}>
      <ImageBackground
        style={styles.headerImg}
        source={require('../../assets/handbook/detailTopImage.png')}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.headerBackIcon} onPress={navigate}>
            {backButtonWithoutArrowSVG(vw(4), vh(3))}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{renderHandBookTitle(id)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const renderContent = (data: RenderDataItem[]) => {
  return (
    <View style={styles.renderCntScrollView}>
      {data.map((v, i) => (
        <TouchableOpacity key={i} style={styles.renderCntContainer}>
          <View style={styles.renderCntImgContainer}>
            <Image
              style={styles.renderCntImg}
              source={getHandBookImgDetail(v.img)}
            />
          </View>
          <View style={styles.renderCntTxTContainer}>
            <Text style={styles.renderCntTitle}>{v.title}</Text>
            <Text style={styles.renderCntsmallDes} numberOfLines={2}>
              {v.smallDes}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HandBookDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221E3D',
  },
  headerImg: {
    width: vw(100),
    height: 155,
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    width: vw(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerBackIcon: {
    position: 'absolute',
    left: vw(4),
    zIndex: 2,
  },
  headerImgContainer: {
    width: vw(100),
    borderRadius: 90,
  },
  renderCntScrollView: {
    width: vw(100),
    rowGap: vh(2),
    alignItems: 'center',
    paddingVertical: vh(2),
  },
  renderCntContainer: {
    height: 290,
    width: vw(90),
    backgroundColor: '#382E75',
    paddingHorizontal: vw(4),
    paddingTop: vh(2),
    borderRadius: 10,
  },
  renderCntTxTContainer: {
    paddingVertical: vh(1),
    rowGap: vh(1),
  },
  renderCntTitle: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 16,
    color: '#EAE1EE',
  },
  renderCntsmallDes: {
    color: '#CDCDCD',
    fontSize: 12,
    fontWeight: '400',
  },
  renderCntImgContainer: {
    width: 'auto',
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
  },
  renderCntImg: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
});
