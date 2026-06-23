import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/header';
import Search from './src/components/search';
import Banner from './src/components/banner';
import Filmes from './data/movies';

export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>
      <Search></Search>
      <Banner></Banner>


      <View style={{width: '90%'}}>
        <FlatList
          horizontal= {true}
          data= {Filmes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Image style={{width: '80%', height: '100%'}} source={{uri: item.imagem}}></Image>
              <Text> {item.nome} </Text>
            </TouchableOpacity>
          )}
        
        
        />


      </View>
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