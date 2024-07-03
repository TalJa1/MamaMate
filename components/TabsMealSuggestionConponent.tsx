/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {vh, vw} from '../styles/stylesheet';

// Import your SVG components and functions

import {
  getSuggestionImg,
  getSuggestionCatergoryImg,
} from '../services/imageHelper';
import {saveIconSVG, wishlistIconSVG} from '../assets/svgXml';

interface SuggestItem {
  label: string;
  icon: React.ReactNode; // Assuming the icon is a React component
}

interface SuggestionItem {
  title: string;
  catergory: string;
  kcal: string;
  capacity: string;
  suggest: SuggestItem[];
}

interface TabsMealSuggestionComponentProps {
  suggestionRenderData: SuggestionItem[];
}

const TabsMealSuggestionComponent: React.FC<
  TabsMealSuggestionComponentProps
> = ({suggestionRenderData}) => {
  return (
    <View style={{rowGap: vh(2)}}>
      {suggestionRenderData.map((item, index) => (
        <View key={index} style={styles.suggestionItem}>
          <Image
            source={getSuggestionImg(item.title)}
            style={styles.suggestionImage}
          />
          <View style={styles.suggestionTextContainer}>
            <View style={styles.suggestionTitleGrp}>
              <Text style={styles.suggestionTitle}>{item.title}</Text>
              <View style={styles.suggestionTitleSVGGrp}>
                {wishlistIconSVG(vw(6), vh(3))}
                {saveIconSVG(vw(6), vh(3))}
              </View>
            </View>
            <View style={styles.suggestionKcalContainer}>
              <Image
                style={styles.suggestionImageCatergory}
                source={getSuggestionCatergoryImg(item.catergory)}
              />
              <Text style={styles.suggestionKcal}>{item.kcal}</Text>
              <Text style={styles.suggestionCapacity}>{item.capacity}</Text>
            </View>
            <View style={styles.checkXGrp}>
              <View style={styles.checkXGrpItem}>
                {item.suggest[0].icon}
                <Text>{item.suggest[0].label}</Text>
              </View>
              <View style={styles.checkXGrpItem}>
                {item.suggest[1].icon}
                <Text>{item.suggest[1].label}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionItem: {
    flexDirection: 'row',
    width: vw(90),
    backgroundColor: '#EAE1EE',
    borderRadius: 16,
    padding: vh(2),
    alignItems: 'center',
  },
  suggestionImage: {
    width: vw(20),
    height: vw(20),
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: vw(3),
  },
  suggestionTextContainer: {
    flex: 1,
    rowGap: vh(1),
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  suggestionKcal: {
    fontSize: 14,
    color: '#555555',
  },
  suggestionCapacity: {
    fontSize: 14,
    color: '#555555',
  },
  suggestionKcalContainer: {
    flexDirection: 'row',
    columnGap: vw(2),
    alignItems: 'center',
  },
  suggestionImageCatergory: {
    width: vw(4),
    height: vw(4),
    resizeMode: 'cover',
  },
  checkXGrp: {
    flexDirection: 'row',
    columnGap: vw(8),
  },
  checkXGrpItem: {
    flexDirection: 'row',
    alignSelf: 'auto',
    alignItems: 'center',
    columnGap: vw(2),
  },
  suggestionTitleSVGGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(3),
  },
  suggestionTitleGrp: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default TabsMealSuggestionComponent;
