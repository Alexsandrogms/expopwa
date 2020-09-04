import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, you are using a
        <Text style={styles.subtitle}> Progressive web app</Text>
      </Text>
      <Text style={styles.description}>
        Use the camera to record your best angles
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#6241C7',
  },

  description: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 40,
    color: '#6B7C85',
  },
});

export default Main;
