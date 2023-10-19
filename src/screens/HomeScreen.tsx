import { FlatList, View } from 'react-native'
import { ActivityIndicator, List } from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCoins } from '../hooks/UseCoins'
import { CrytoHeader } from '../components/CryptoHeader'
import { RootStackParams } from '../navigation/Navigator'
import { ListItem } from '../components/ListItem'
import { Coin } from '../interfaces/Coin'

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>

export const HomeScreen = ({ navigation }: Props) => {
  const { coins, getCoinsAssets } = useCoins()

  const handlePress = (coin: Coin) => {
    navigation.navigate('CoinScreen', { coin })
  }

  return (
    <View>
      <List.Section>
    
        <FlatList
          data={coins}
          renderItem={({ item }) => <ListItem coin={item} onPressAction={handlePress} />}
          keyExtractor={coin => coin.id}
          showsVerticalScrollIndicator={false}
          onEndReached={getCoinsAssets}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={CrytoHeader}
          ListFooterComponent={<ActivityIndicator size={'large'} />}
        />
    
      </List.Section>
    </View>
  )
}
