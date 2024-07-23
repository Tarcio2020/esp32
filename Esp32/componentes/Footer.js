// Footer.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = ({ text }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#007bff', // Azul bonito
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Footer;
