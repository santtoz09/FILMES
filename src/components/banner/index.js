import {Text, View, Image} from 'react-native';
import styles from './style'

export default function Banner() {
    return (
        <View style={styles.input}>

            <Text style={styles.mainText}> Em cartaz </Text>
                  <Image
                    style={styles.imagem}
                    source={require('../../../assets/ney.jpg')}/>
                   <Text style={styles.titleName}> Neymar: O Caos Perfeito </Text>
        </View>

    );
}