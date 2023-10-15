import { useEffect, useState } from 'react'
import { CoinTimepoint, CoinHistoryResponse } from '../interfaces/Coin'

export const useCoinHistory= (name: string, interval = 'd1') => {
  const [coinHistory, setCoinHistory] = useState<CoinTimepoint[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCoinsAssets()
  }, [])

  const getCoinsAssets = async () => {
    setIsLoading(true)
    const resp = await fetch(`https://api.coincap.io/v2/assets/${name}/history?interval=${interval}`)
    const { data } = await resp.json() as CoinHistoryResponse
    setCoinHistory([...coinHistory, ...data])
    setIsLoading(false)
  }

  return {
    coinHistory,
    isLoading
  }
}