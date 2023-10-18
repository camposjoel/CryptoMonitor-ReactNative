import { useState } from 'react'
import { Image, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import LinearGradient from 'react-native-linear-gradient'
import { RootStackParams } from '../navigation/Navigator'
import { CryptoPrice } from '../components/CryptoPrice'
import { CryptoVariation } from '../components/CryptoVariation'
import { CryptoChart } from '../components/CryptoChart'

interface Props extends NativeStackScreenProps<RootStackParams, 'CoinScreen'> { }

export const CoinScreen = ({ navigation, route }: Props) => {
  const { coin } = route.params
  const [imageUri, setImageUri] = useState<string>(`https://cryptologos.cc/logos/${coin.id}-${coin.symbol.toLowerCase()}-logo.png`)

  const loadFallbackImage = () => {
    setImageUri(`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`)
  }

  return (
    <LinearGradient
      colors={['white', 'lightgray', 'gray']}
      start={{ x: 0.5, y: 0.1 }}
      style={{ display: 'flex', flex: 1 }}
    >
      <View>
        <Appbar.Header mode='center-aligned'>
          <Appbar.BackAction onPress={() => navigation.pop()} />
          <Appbar.Content title={coin.name} titleStyle={{ fontSize: 25 }} />
        </Appbar.Header>

        <Image
          style={{ width: 125, height: 125, alignSelf: 'center', marginTop: 20 }}
          source={{ uri: imageUri }}
          onError={() => loadFallbackImage()}
        />

        <CryptoPrice price={coin.priceUsd} />

        <CryptoVariation variation={coin.changePercent24Hr} />

        <CryptoChart coinName={coin.id} />
      </View>
    </LinearGradient>
  )
}