import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notas from '../screens/Notas'
import Config from '../screens/Config';
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

export default function NavButtom() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#18374b'
        }
      }}>
      <Tab.Screen name="Notas" component={Notas}
      options={{
        tabBarIcon: ({size}) => <Feather name='Home' size={size}/>
      }}
      />
      <Tab.Screen name="Configuração" component={Config}
      options={{
        tabBarIcon: ({size}) => <Feather name='Settings' size={size}/>
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>

  );
}