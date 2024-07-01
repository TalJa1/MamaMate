/* eslint-disable prettier/prettier */
import {
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
// import useStatusBar from '../../services/customHook';

type HandBookDetailRouteProp = RouteProp<RootStackParamList, 'HandBookDetail'>;

const HandBookDetailPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // const [renderData, setRenderData] = React.useState([]);
  const route = useRoute<HandBookDetailRouteProp>();
  const {id} = route.params;

  const handleNavigation = () => {
    navigation.goBack();
  };
  // useStatusBar('transparent');

  return (
    <ScrollView style={styles.container}>
      {headerRenderView(id, handleNavigation)}
      {/* <View></View> */}
    </ScrollView>
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
      <View>
        {/* {renderData.map((v, i: number) => (
          {renderContent(i,)}
        ))} */}
      </View>
    </View>
  );
};

// const renderContent = (key: number, title: string, des: string, img: string) => {
//   return <View></View>;
// };

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
});
