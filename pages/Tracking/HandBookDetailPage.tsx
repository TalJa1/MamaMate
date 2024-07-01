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
import givingBirthJourney from '../../data/handbook/givingBirthJourney.json';
import {getHandBookImgDetail} from '../../services/imageHelper';
// import useStatusBar from '../../services/customHook';

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
        setRenderData([]);
        break;
      case 1:
        setRenderData([]);
        break;
      case 2:
        setRenderData([]);
        break;
      case 3:
        setRenderData([]);
        break;
      case 4:
        setRenderData(givingBirthJourney);
        break;
      case 5:
        setRenderData([]);
        break;
      case 6:
        setRenderData([]);
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
      <ScrollView>{renderContent(id, renderData)}</ScrollView>
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

const renderContent = (key: number, data: RenderDataItem[]) => {
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
    paddingTop: vh(1),
    borderRadius: 10,
  },
  renderCntTxTContainer: {
    paddingVertical: vh(2),
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
