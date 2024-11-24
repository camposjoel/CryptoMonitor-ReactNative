import { Image, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import LinearGradient from 'react-native-linear-gradient'
import { RootStackParams } from '../navigation/Navigator'
import { CryptoPrice } from '../components/CryptoPrice'
import { CryptoVariation } from '../components/CryptoVariation'
import { CryptoChart } from '../components/CryptoChart'
import { useImageAsset } from '../hooks/UseImageAsset'
import { useCoinHistory } from '../hooks/UseCoinHistory'

interface Props extends NativeStackScreenProps<RootStackParams, 'CoinScreen'> {}

export const CoinScreen = ({ navigation, route }: Props) => {
  const { coin } = route.params
  const { bgColor, imageUri, loadFallback } = useImageAsset(
    coin.id,
    coin.symbol
  )
  const { coinHistory, isLoading } = useCoinHistory(coin.id, 'h1')

  return (
    <LinearGradient
      colors={['white', bgColor]}
      start={{ x: 0.5, y: 0.1 }}
      end={{ x: 0.5, y: 1.4 }}
      style={{ display: 'flex', flex: 1 }}
    >
      <View>
        <Appbar.Header
          mode="center-aligned"
          style={{ backgroundColor: 'transparent' }}
        >
          <Appbar.BackAction onPress={() => navigation.pop()} />
          <Appbar.Content title={coin.name} titleStyle={{ fontSize: 25 }} />
        </Appbar.Header>

        <Image
          style={{
            width: 125,
            height: 125,
            alignSelf: 'center',
            marginTop: 20
          }}
          source={{ uri: imageUri }}
          onError={() => loadFallback()}
        />

        <CryptoPrice price={coin.priceUsd} />

        <CryptoVariation variation={coin.changePercent24Hr} />

        <CryptoChart
          coinPrices={coinHistory.prices}
          coinTimes={coinHistory.times}
          isLoading={isLoading}
        />
      </View>
    </LinearGradient>
  )
}
