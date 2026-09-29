import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';



export default function Detalhes() {

    const route = useRoute();

    return (
        <View>
            <Text> 
                TELA DE DETALHES
            </Text>

            <Text> 
                {route.params.titulo}
            </Text>

            <Text> 
                {route.params.nota}
            </Text>

            <Image style={{width: '90%', height: 300 }} source={{uri: route.params.imagem}} /> 
            
        </View>
    );
}