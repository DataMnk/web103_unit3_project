// Functions to fetch location data from the Express API

const API_BASE = '/api'


// Get all locations
export const getAllLocations = async () => {
  const response = await fetch(`${API_BASE}/locations`)
  const data = await response.json()
  return data
}

// Get a single location by ID
export const getLocationById = async (id) => {
  const response = await fetch(`${API_BASE}/locations/${id}`)
  const data = await response.json()
  return data
}