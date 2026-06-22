import React, { useState, useEffect } from 'react'
import { getAllEvents } from '../services/EventsAPI'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const eventsData = await getAllEvents()
        setEvents(eventsData)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    })()
  }, [])

  return (
    <div className='location-events'>
      <header>
        <div className='location-info'>
          <h2>All Events</h2>
          <p>Explore everything happening in Alpine Village</p>
        </div>
      </header>
      <main>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
              description={event.description}
              date={event.date}
              location_id={event.location_id}
            />
          ))
        ) : (
          <h2>No events found!</h2>
        )}
      </main>
    </div>
  )
}

export default Events