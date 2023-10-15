import { useEffect, useState } from 'react'

export const useFormattedPrice = (price: string) => {
  const [priceFormatted, setPriceFormatted] = useState('')

  useEffect(() => {
    const value = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(price))
    setPriceFormatted(value)
  }, [price])
  
  return {
    priceFormatted
  }
}