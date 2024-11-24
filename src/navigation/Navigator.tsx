import {
  NativeStackNavigationOptions,
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { CoinScreen } from '../screens/CoinScreen'
import { Coin } from '../interfaces/Coin'

export type RootStackParams = {
  HomeScreen: undefined,
  CoinScreen: { coin: Coin }
}

const options: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: 'white'
  },
  statusBarStyle: 'dark'
}

const Stack = createNativeStackNavigator<RootStackParams>()

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoinScreen" component={CoinScreen} />
    </Stack.Navigator>
  )
}
