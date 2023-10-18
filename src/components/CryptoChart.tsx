import { Dimensions, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { LineChart } from 'react-native-chart-kit'
import { useCoinHistory } from '../hooks/UseCoinHistory'

const SCREEN_WIDTH = Dimensions.get('window').width

interface Props {
  coinName: string
}

export const CryptoChart = ({ coinName }: Props) => {
  const { coinHistory, isLoading } = useCoinHistory(coinName, 'h1')

  const dateFormatter = (datetime: number) => {
    const date = new Date(datetime)

    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Mexico_City',
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit'
    })

    return formatter.format(date)
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {coinHistory.length > 0 ?
        <LineChart
          data={{
            labels: coinHistory.map(item => dateFormatter(item.time)).slice(-12),
            datasets: [
              {
                data: coinHistory.map(item => +item.priceUsd).slice(-12)
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
          verticalLabelRotation={45}
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