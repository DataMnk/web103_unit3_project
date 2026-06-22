import express from 'express'
import { getLocations, getLocationById } from '../controllers/locations.js'

const router = express.Router()

// GET /api/locations
router.get('/', getLocations)

// GET /api/locations/:id
router.get('/:id', getLocationById)

export default router