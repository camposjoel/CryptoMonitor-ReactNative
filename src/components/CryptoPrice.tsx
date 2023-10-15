import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useFormattedPrice } from '../hooks/UseFormattedPrice'

interface Props {
  price: string
}

export const CryptoPrice = ({ price }: Props) => {
  const { priceFormatted } = useFormattedPrice(price)

  return (
    <View style={styles.container}>
      <Text style={{}} variant='displayMedium'>{priceFormatted}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  coinPriceGain: {
    color: 'lightgreen'
  },
  cainPricePain: {
    color: 'lightcoral'
  }
})