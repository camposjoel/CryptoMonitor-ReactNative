import { useEffect, useState } from 'react'
import { COINCAP_KEY } from '@env';
import { Coin, CoinsResponse } from '../interfaces/Coin'

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getCoinsAssets()
  }, [])

  const getCoinsAssets = async () => {
    setIsLoading(true)
    const resp = await fetch(`https://api.coincap.io/v2/assets?limit=25&offset=${offset}`, {
      headers: {
        'Authorization': `Bearer ${COINCAP_KEY}`
      }
    })
    const { data } = await resp.json() as CoinsResponse
    setCoins([...coins, ...data])
    setIsLoading(false)
    setOffset(offset + 25)
  }

  return {
    coins,
    isLoading,
    getCoinsAssets
  }
}