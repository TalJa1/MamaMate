/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ComponentRest4 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/RestAssets/mamaMate2.png')} />
      <Text style={styles.titleTxt}>
        Con sẽ <Text style={styles.titleTxtinline}>"Tốt bụng và dịu dàng"</Text>{' '}
        như bố mẹ mong muốn.
      </Text>
      <Image
        style={styles.florImg}
        source={require('../assets/RestAssets/sleepingChild.png')}
      />
      <Text style={styles.titleTxt}>
        Hơn nữa con sẽ cùng mẹ thật khỏe mạnh và hạnh phúc.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  titleTxt: {
    marginTop: 30,
    textAlign: 'center',
    color: '#221E3D',
    fontSize: 20,
    fontWeight: '800',
  },
  titleTxtinline: {
    textAlign: 'center',
    color: '#AA3A3A',
    fontSize: 20,
    fontWeight: '800',
  },
  florImg: {
    marginTop: 40,
  },
});

export default ComponentRest4;
