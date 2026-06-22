import 'dotenv/config'
import { pool } from '../config/database.js'

// Get all events
export const getEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY date')
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching events:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Get all events for a specific location
export const getEventsByLocation = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      'SELECT * FROM events WHERE location_id = $1 ORDER BY date',
      [id]
    )
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching events by location:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}