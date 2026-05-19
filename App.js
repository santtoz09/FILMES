import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>





      {/* INICIO DA HEADER */}


      <View style={styles.viewHeader}>
        <Feather name="menu" size={24} color="white" />
        <Text style={styles.titulo}> TECFILMES </Text>
        <TouchableOpacity>

        </TouchableOpacity>

      </View>




      {/* INICIO DA BARRA DE PESQUISA */}

      <View style={styles.input}>


        <TextInput
          placeholder='Digite o filme que deseja buscar'
          style={styles.inputSearch}></TextInput>
        <TouchableOpacity><Feather name="search" size={24} color="black" /></TouchableOpacity>



      </View>






      {/* INICIO DO BANNER */}
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


  viewHeader: {

    //HEADER

    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between'



  },
  titulo: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },

  // SEARCH BAR
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  inputSearch: {
    height: 28,
    padding: 4,
    width: '100%'
  },

  //MAIN
  imagem: {
    width: '90%',
    height: 450,
    marginTop: 15,
    borderRadius: 10
  },
  mainText : {
    color: 'white',
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 3  
    
  }

});



