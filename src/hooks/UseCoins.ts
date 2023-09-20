import { useEffect, useState } from 'react'
import { Coin } from '../interfaces/Coin'

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.coincap.io/v2/assets')
      .then(res => res.json())
      .then(data => {
        setCoins(data.data)
        setIsLoading(false)
      })
  }, [])

  return {
    coins,
    isLoading
  }
}