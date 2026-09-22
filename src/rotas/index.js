import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detalhes from '../Telas/Detalhes';
import Home from '../Telas/Home';

const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                name="Home" 
                component={Home} />

                <Stack.Screen 
                name="Detalhes" 
                component={Detalhes} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}