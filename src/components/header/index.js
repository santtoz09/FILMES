
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput } from 'react-native';
import styles from './style'

export default function Header(){
    return(

    <View style={styles.viewHeader}>

         <Feather name="menu" size={24} color="white" />

         <Text style={styles.titulo}> TECFILMES </Text>

         <TouchableOpacity>
         </TouchableOpacity>
 
       </View>
    );
}