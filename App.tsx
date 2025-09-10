import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigation/Navigator'
import { SafeAreaView } from 'react-native-safe-area-context'

function App() {

  return (
    <>
      <NavigationContainer>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigator />
          </SafeAreaView>
        </PaperProvider>
      </NavigationContainer>
    </>
  )
}

export default App
