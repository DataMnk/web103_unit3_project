// Functions to fetch event data from the Express API

const API_BASE = '/api'

// Get all events
export const getAllEvents = async () => {
  const response = await fetch(`${API_BASE}/events`)
  const data = await response.json()
  return data
}

// Get all events for a specific location
export const getEventsByLocation = async (locationId) => {
  const response = await fetch(`${API_BASE}/events/location/${locationId}`)
  const data = await response.json()
  return data
}