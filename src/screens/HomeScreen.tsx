import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, List, Avatar } from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCoins } from '../hooks/UseCoins'
import { CrytoHeader } from '../components/CryptoHeader'
import { RootStackParams } from '../navigation/Navigator'

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>

export const HomeScreen = ({ navigation }: Props) => {
  const { coins } = useCoins()

  return (
    <View>
      <ScrollView>
        <List.Section>
          <CrytoHeader />
          {coins.map((coin) => (
            <List.Item
              title={coin.name}
              titleStyle={styles.listItemText}
              key={coin.id}
              onPress={() => navigation.navigate('CoinScreen', { coin: coin })}
              left={() => <Avatar.Image style={{ marginTop: 6 }} size={26} source={{ uri: `https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png` }} />}
              right={() => <Text style={styles.listItemRight}>{coin.symbol}</Text>}
              style={styles.listItem}
            />
          ))}
        </List.Section>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    paddingLeft: 18,
    height: 60
  },
  listItemText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20
  },
  listItemRight: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    opacity: 0.5
  }
})