import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigation/Navigator'

function App() {

  return (
    <>
      <NavigationContainer>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </NavigationContainer>
    </>
  )
}

export default App
