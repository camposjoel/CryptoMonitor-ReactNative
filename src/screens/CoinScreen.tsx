import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { Appbar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack' 
import { RootStackParams } from '../navigation/Navigator'

interface Props extends NativeStackScreenProps<RootStackParams, 'CoinScreen'> {}

export const CoinScreen = ({ navigation, route }: Props) => {
  const { coin } = route.params

  return (
    <View>
      <Appbar.Header mode='center-aligned'>
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title={coin.name} />
    </Appbar.Header>

      <Text variant='headlineLarge'>{coin.name}</Text>
    </View>
  )
}