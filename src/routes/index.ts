import { Router } from 'express'
import home from '../controller/index'

const route = Router()

route.get('/', home.index)

export default route
