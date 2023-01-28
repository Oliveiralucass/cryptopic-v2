import axios from 'axios'

export const coinGeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3'
})

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})