import { StyleSheet } from 'react-native'
import { Avatar, List, Text } from 'react-native-paper'
import { Coin } from '../interfaces/Coin'

interface Props {
  coin: Coin,
  onPressAction: (coin: Coin) => void
}

export const ListItem = ({ coin, onPressAction }: Props) => {
  return (
    <List.Item
      title={coin.name}
      titleStyle={styles.listItemText}
      onPress={() => onPressAction(coin)}
      left={() => <Avatar.Image style={{ marginTop: 6, backgroundColor: 'transparent' }} size={28} source={{ uri: `https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png` }} />}
      right={() => <Text style={styles.listItemRight}>{coin.symbol}</Text>}
      style={styles.listItem}
    />
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