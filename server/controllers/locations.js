import 'dotenv/config'
import { pool } from '../config/database.js'

// Get all locations
export const getLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations ORDER BY id')
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching locations:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Get single location by ID
export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Location not found' })
    }
    res.json(result.rows[0])
  } catch (error) {
    console.error('Error fetching location:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}