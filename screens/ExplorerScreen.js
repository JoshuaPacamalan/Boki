import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Samples Screen</Text>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SampleScreen')}>
          <Text style={styles.navItem}>Samples</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ExploreScreen')}>
          <Text style={styles.navItem}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LibraryScreen')}>
          <Text style={styles.navItem}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpgradeScreen')}>
          <Text style={styles.navItem}>Upgrade</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  text: { fontSize: 20, color: '#fff' },
  bottomNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 10, 
    borderTopWidth: 1, 
    borderTopColor: '#444', 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    backgroundColor: '#222' 
  },
  navItem: { color: '#bbb', fontSize: 14, padding: 10 },
});

export default ExploreScreen;
