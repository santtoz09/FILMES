import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/header';
import Search from './src/components/search';


export default function App() {
  return (
    <View style={styles.container}>



      <Header></Header>


      <Search></Search>


      <Text style={styles.mainText}> Em cartaz </Text>
      <Image
        style={styles.imagem}
        source={require('./assets/ney.jpg')}
      />

    </View>
  );
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#2D0C6B',
    alignItems: 'center',
  },




 
  //MAIN
  imagem: {
    width: '90%',
    height: 450,
    marginTop: 15,
    borderRadius: 10
  },
  mainText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 3

  }

});



