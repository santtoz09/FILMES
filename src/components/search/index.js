
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './style'

export default function Search() {
    return (
        <View style={styles.input}>

            <TextInput
                placeholder='Digite o filme que deseja buscar'
                style={styles.inputSearch}></TextInput>
            <TouchableOpacity><Feather name="search" size={24} color="black" /></TouchableOpacity>

        </View>

    );
}