import { ScrollView, View } from 'react-native'
import { ActivityIndicator, List } from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCoins } from '../hooks/UseCoins'
import { CrytoHeader } from '../components/CryptoHeader'
import { RootStackParams } from '../navigation/Navigator'
import { ListItem } from '../components/ListItem'
import { Coin } from '../interfaces/Coin'

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>

export const HomeScreen = ({ navigation }: Props) => {
  const { coins, isLoading } = useCoins()

  const handlePress = (coin: Coin) => {
    navigation.navigate('CoinScreen', { coin })
  }

  return (
    <View>
      <ScrollView>
        <List.Section>
          <CrytoHeader />
          {isLoading && <ActivityIndicator size={'large'} />}
          {coins.map((coin) => (
            <ListItem coin={coin} onPressAction={handlePress} key={coin.id} />
          ))}
        </List.Section>
      </ScrollView>
    </View>
  )
}
