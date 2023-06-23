import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import the Ionicons library
// import { NavigationContainer } from '@react-navigation/native';
// import QRscan from './pages/QRscan';
// import Settings from './pages/Settings';

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>LineAssist</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={text => console.log(text)}
        />
      </View>
      <Text style={styles.text}></Text>
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <Ionicons name="qr-code" size={24} color="#000000" />
        <Text style={styles.iconText}>Scan QR</Text>
        <Ionicons name="home" size={24} color="#000000" />
        <Text style={styles.iconText}>Home</Text>
        {/* <Ionicons name="notifications" size={24} color="w#000000" /> */}
        <Ionicons name="settings" size={24} color="#000000" />
        <Text style={styles.iconText}>Settings</Text>
      </View>
    </View>
  );
}
// const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    width: '100%',
    height: 180,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -500,
  },
  navBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderWidth: 3,
    backgroundColor: '#ecf0f1',
    borderColor: 'gray',
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  bottomNavBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  // bottomNavBarText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#3498db',
  // },
  
});
