import { StyleSheet, View } from 'react-native'
import { useFormattedPrice } from '../hooks/UseFormattedPrice'
import { Text } from 'react-native-paper'

interface Props {
  variation: string
}

export const CryptoVariation = ({ variation }: Props) => {
  const { priceFormatted } = useFormattedPrice(variation)

  return (
    <View style={styles.container}>
      <View style={styles.chip}>
        <Text style={+variation <= 0 ? styles.variationNegative : styles.variationPositive} variant='titleLarge'>{priceFormatted}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: 40
  },
  chip: {
    width: 120,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FAFAFA',
    opacity: 0.5,
    elevation: 9
  },
  variationPositive: {
    color: 'green'
  },
  variationNegative: {
    color: 'red'
  }
})