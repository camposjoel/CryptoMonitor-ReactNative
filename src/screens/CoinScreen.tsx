import { Image, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigation/Navigator'
import { CryptoPrice } from '../components/CryptoPrice'
import { CryptoVariation } from '../components/CryptoVariation'

interface Props extends NativeStackScreenProps<RootStackParams, 'CoinScreen'> { }

export const CoinScreen = ({ navigation, route }: Props) => {
  const { coin } = route.params

  return (
    <View>
      <Appbar.Header mode='center-aligned'>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title={coin.name} titleStyle={{ fontSize: 25 }} />
      </Appbar.Header>

      <Image
        style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 20 }}
        source={{ uri: `https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png` }}
      />

      <CryptoPrice price={coin.priceUsd} />

      <CryptoVariation variation={coin.changePercent24Hr} />
    </View>
  )
}