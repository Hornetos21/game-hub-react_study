import axios, { CanceledError } from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '89e8f9abf2f3447ab4043b5b88e4926f',
  },
})

export { CanceledError }
