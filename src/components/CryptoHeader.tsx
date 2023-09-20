import { Image, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const CrytoHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logos/cryptos-logo.png')}
        style={{ width: 45, marginRight: 10 }}
        resizeMode='contain'
      />
      <Text style={styles.title} variant='headlineLarge'>CRYPTOS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  title: {
    fontFamily: 'JosefinSans-Regular'
  }
})