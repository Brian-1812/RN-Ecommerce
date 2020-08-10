import React from 'react';
import { View, StyleSheet, Image} from 'react-native'



const Header = () => {
  return (
   <View style={styles.header}><Image source={require('../assets/logo.png')} style={{width: 150, height:60}}></Image></View>
  );
};

const styles = StyleSheet.create({
  header: {
      height: 60,
      alignItems: 'center',
      justifyContent:'flex-start',
      backgroundColor:'#fff',
  },
})

export default Header;