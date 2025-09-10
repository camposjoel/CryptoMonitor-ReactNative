import { useState } from 'react'
import { environment } from '../environments/environment'

export const usePriceWs = (coinId: string, initialPrice: string) => {
  const [price, setPrice] = useState<string>(initialPrice)

  const priceWs = new WebSocket(`wss://wss.coincap.io/prices?assets=${coinId}&apiKey=${environment.coincapApiKey}`)

  priceWs.onmessage = function (msg) {
    setPrice(JSON.parse(msg.data)[coinId])
  }

  const closeConnection = () => priceWs.close()

  return {
    price,
    closeConnection
  }
}