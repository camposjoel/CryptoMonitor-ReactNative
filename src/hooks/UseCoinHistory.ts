import { useEffect, useState } from 'react'
import { CoinTimepoint, CoinHistoryResponse } from '../interfaces/Coin'

type Interval = 'm1' | 'm5' | 'm15' | 'm30' | 'h1' | 'h2' | 'h6' | 'h12' | 'd1'

export const useCoinHistory= (id: string, interval: Interval = 'h12') => {
  const [coinHistory, setCoinHistory] = useState<CoinTimepoint[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCoinsAssets()
  }, [])

  const getCoinsAssets = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`)
      const { data } = await resp.json() as CoinHistoryResponse
      setCoinHistory(data)
    } catch (error) {
      console.log('error', error)
    }
    setIsLoading(false)
  }

  return {
    coinHistory,
    isLoading
  }
}