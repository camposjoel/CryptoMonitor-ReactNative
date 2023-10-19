import { useEffect, useState } from 'react'
import { CoinHistoryResponse } from '../interfaces/Coin'

type Interval = 'm1' | 'm5' | 'm15' | 'm30' | 'h1' | 'h2' | 'h6' | 'h12' | 'd1'
type CoinTimepointchart = {
  times: string[],
  prices: number[]
}
export const useCoinHistory= (id: string, interval: Interval = 'h12') => {
  const [coinHistory, setCoinHistory] = useState<CoinTimepointchart>({
    times: [],
    prices: []
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCoinsAssets()
  }, [])

  const getCoinsAssets = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`)
      const { data } = await resp.json() as CoinHistoryResponse
      const cointTimes = data.map(coin => dateFormatter(coin.time)).slice(-12).filter((_, i) => i % 2 === 0)
      const coinPrices = data.map(coin => +coin.priceUsd).slice(-12)

      setCoinHistory({ times: cointTimes, prices: coinPrices })
    } catch (error) {
      console.log('error', error)
    }
    setIsLoading(false)
  }

  const dateFormatter = (datetime: number) => {
    const date = new Date(datetime)

    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Mexico_City',
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit'
    })

    return formatter.format(date)
  }

  return {
    coinHistory,
    isLoading
  }
}