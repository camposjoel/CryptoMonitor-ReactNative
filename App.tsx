import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, List, Avatar } from 'react-native-paper'
import { useCoins } from './src/hooks/UseCoins'
import { CrytoHeader } from './src/components/CryptoHeader'

function App() {
  const { coins } = useCoins()

  return (
    <View>
      <ScrollView>
        <List.Section>
          <CrytoHeader />
          {coins.map((coin) => (
            <List.Item
              title={coin.name}
              titleStyle={{ fontFamily: 'JosefinSans-Regular' }}
              key={coin.id}
              onPress={() => { }}
              left={() => <Avatar.Image size={25} source={{ uri: `https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png` }} />}
              right={() => <Text style={styles.listItemText}>{coin.symbol}</Text>}
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
    paddingLeft: 18
  },
  listItemText: {
    fontFamily: 'JosefinSans-Regular'
  }
})

export default App
