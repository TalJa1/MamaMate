/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ComponentRest3 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mamaImg}
        source={require('../assets/RestAssets/mamaMate2.png')}
      />
      <Text style={styles.titleTxt}>Bố mẹ sắp đuợc thăng chức rồi!</Text>
      <Text style={styles.titleTxt}>
        Mamamate sẽ giúp mẹ và con khỏe mạnh thôi mà!
      </Text>
      <Image
        style={styles.florImg}
        source={require('../assets/RestAssets/momWithFlor.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  mamaImg: {
    marginBottom: 30,
  },
  titleTxt: {
    textAlign: 'center',
    color: '#221E3D',
    fontSize: 20,
    fontWeight: '800',
  },
  florImg: {
    marginTop: 40,
  },
});

export default ComponentRest3;
