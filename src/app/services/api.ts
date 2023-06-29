import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://yougioh-api-cards-production.up.railway.app',
})
