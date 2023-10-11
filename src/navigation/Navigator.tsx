import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { CoinScreen } from '../screens/CoinScreen'
import { Coin } from '../interfaces/Coin'

export type RootStackParams = {
  HomeScreen: undefined,
  CoinScreen: { coin: Coin }
}

const Stack = createNativeStackNavigator<RootStackParams>()

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoinScreen" component={CoinScreen} />
    </Stack.Navigator>
  );
}