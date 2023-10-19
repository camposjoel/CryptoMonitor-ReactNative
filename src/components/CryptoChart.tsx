import { Dimensions, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { LineChart } from 'react-native-chart-kit'

const SCREEN_WIDTH = Dimensions.get('window').width

interface Props {
  coinTimes: string[],
  coinPrices: number[],
  isLoading: boolean
}

export const CryptoChart = ({ coinPrices, coinTimes, isLoading }: Props) => {

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color='lightgray' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {coinPrices.length > 0 ?
        <LineChart
          data={{
            labels: coinTimes,
            datasets: [
              {
                data: coinPrices
              }
            ]
          }}
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH}
          chartConfig={{
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 3,
            barPercentage: 0.5,
            useShadowColorFromDataset: false
          }}
          bezier
          style={{ borderRadius: 10 }}
        />
        : <Text variant='bodyMedium' style={{ color: 'gray' }}>No history information</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_WIDTH,
    marginTop: 20
  }
})