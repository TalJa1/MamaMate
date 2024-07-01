/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/customHook';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../../styles/stylesheet';
import {Searchbar} from 'react-native-paper';
import {searchingSVG} from '../../assets/svgXml';
import {handbookData} from '../../services/renderData';
import {getHandBookImg} from '../../services/imageHelper';

const HandBookPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  useStatusBar('#19162E');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchingContainer}>
        <Searchbar
          style={styles.textInput}
          icon={() => searchingSVG(vw(5), vh(5))}
          placeholder="Tìm"
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholderTextColor={'#CDCDCD'}
        />
      </View>
      <ScrollView style={styles.scrollviewContainer}>
        {handbookData.map((v, i) => (
          <TouchableOpacity key={i} style={styles.scrollviewItem}>
            <Image
              style={styles.scrollviewItemImg}
              source={getHandBookImg(v)}
            />
            <Text style={styles.scrollviewTxT}>{v}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HandBookPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221E3D',
    flex: 1,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchingContainer: {
    height: 80,
    width: vw(100),
    backgroundColor: '#19162E',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
  },
  textInput: {
    width: vw(90),
    backgroundColor: '#493E904D',
  },
  scrollviewContainer: {
    marginVertical: vh(2),
    width: vw(100),
  },
  scrollviewItem: {
    marginBottom: vh(2),
    alignItems: 'center',
  },
  scrollviewTxT: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  scrollviewItemImg: {
    // width: vw(90),
  },
});
