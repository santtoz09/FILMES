import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/header';
import Search from './src/components/search';
import Banner from './src/components/banner';


export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>
      <Search></Search>
      <Banner></Banner>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D0C6B',
    alignItems: 'center'
  }
});