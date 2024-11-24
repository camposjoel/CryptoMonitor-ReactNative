import { useEffect, useState } from 'react'
import ImageColors from 'react-native-image-colors'

export const useImageAsset = (id: string, symbol: string) => {
  const [imageUri, setImageUri] = useState<string>(`https://cryptologos.cc/logos/${id}-${symbol.toLowerCase()}-logo.png`)
  const [bgColor, setBgColor] = useState<string>('lightgray')

  const getBackgroundColor = async () => {
    try {
      const result = await ImageColors.getColors(imageUri, {
        fallback: '#FFFFFF',
        cache: true,
      })
      switch (result.platform) {
        case 'android':
          return setBgColor(result.vibrant || 'lightgray')
        case 'ios':
          return setBgColor(result.background)
        default:
          return setBgColor('lightgray')
      }
    } catch (error) {
      console.log('Error!!', error)

    }
  }

  const loadFallback = () => {
    setImageUri(`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`)
    getBackgroundColor()
  }

  useEffect(() => {
    getBackgroundColor()
  }, [])

  return {
    bgColor,
    imageUri,
    loadFallback
  }
}
