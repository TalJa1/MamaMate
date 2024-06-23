/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ComponentRest2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>
        Ứng dụng này sẽ giúp bố mẹ cảm thấy yên tâm hơn nếu như được cung cấp
        một số thông tin chi tiết hơn nữa ạ
      </Text>
      <Image
        style={styles.mainImage}
        source={require('../assets/RestAssets/Frame.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  titleTxt: {
    textAlign: 'center',
    color: '#221E3D',
    fontWeight: '800',
    fontSize: 20,
  },
  mainImage: {
    marginTop: 50,
  },
});

export default ComponentRest2;
