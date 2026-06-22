import express from 'express'
import { getEvents, getEventsByLocation } from '../controllers/events.js'

const router = express.Router()

// GET /api/events
router.get('/', getEvents)

// GET /api/events/location/:id
router.get('/location/:id', getEventsByLocation)

export default router