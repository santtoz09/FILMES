import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style'

export default function CardMovies({titulo, imagem, nota}) {
   return (


        <TouchableOpacity style={styles.containerFilmes}>

            <Image style={styles.images} source={{ uri: imagem }} />

            <Text style={styles.titulo}> {titulo} </Text>

            <Text style={styles.textNota}> {nota} </Text>
        </TouchableOpacity>
    )
}