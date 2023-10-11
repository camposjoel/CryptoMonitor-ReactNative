import { useEffect, useState } from 'react'
import { Coin, CoinsResponse } from '../interfaces/Coin'

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCoinsAssets()
  }, [])

  const getCoinsAssets = async () => {
    setIsLoading(true)
    const resp = await fetch('https://api.coincap.io/v2/assets')
    const { data } = await resp.json() as CoinsResponse
    setCoins(data)
    setIsLoading(false)
  }

  return {
    coins,
    isLoading
  }
}