import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';


import styles from './style'

export default function Detalhes() {

    const route = useRoute();

    return (
        <View style={styles.container}>

            <Image
                style={styles.images}
                source={{ uri: route.params.imagem }}
            />

            <Text
                style={styles.titulo}>

                {route.params.titulo}
            </Text>

            <Text
                style={styles.textNota}>
                IMdB: {route.params.nota}
            </Text>

            <Text
                style={styles.sinopseTitulo}>
                Sinopse:
            </Text>

            <Text
                style={styles.sinopse}>
                {route.params.sinopse}
            </Text>
        </View>
    );
}