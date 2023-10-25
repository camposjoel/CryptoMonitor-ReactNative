import { useState } from 'react'

export const usePriceWs = (coinId: string, initialPrice: string) => {
  const [price, setPrice] = useState<string>(initialPrice)

  const priceWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${coinId}`)

  priceWs.onmessage = function (msg) {
    setPrice(JSON.parse(msg.data)[coinId])
  }

  const closeConnection = () => priceWs.close()

  return {
    price,
    closeConnection
  }
}