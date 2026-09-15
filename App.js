import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/header';
import Search from './src/components/search';
import Banner from './src/components/banner';
import Filmes from './data/movies';
import CardMovies from './src/components/cardMovies';
import Rotas from './src/rotas';


export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>
      <Search></Search>
      <Banner></Banner>


      <View style={{ width: '85%' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={true}
          data={Filmes}
          keyExtractor={(item) => item.id}
          renderItem=
          {
            ({ item }) => (

              <CardMovies
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.imdb}
              ></CardMovies>
            )
          }
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
  },

  containerFilmes: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingRight: 16,
    width: 140
  },

  titulo: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 8
  },

  textNota: {
    fontWeight: 700,
    fontSize: 20,
    color: '#efcf00',
    paddingLeft: 4
  },

  images: {
    width: '100%',
    height: 170,
    borderRadius: 8
  }


});