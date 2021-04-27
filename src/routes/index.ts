import { Router } from 'express'

const route = Router()

route.get('/', (req, res) => {
  return res.json('hello')
})

export default route
