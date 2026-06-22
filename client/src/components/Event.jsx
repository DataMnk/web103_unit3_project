import React from 'react'
import '../css/Event.css'

const Event = ({ name, description, date, location_id }) => {
  // Format date nicely
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // Check if event has passed
  const isPast = new Date(date) < new Date()

  return (
    <article className='event-information' style={{ opacity: isPast ? 0.6 : 1 }}>
      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{name} {isPast ? '✓ Past Event' : '🗓️ Upcoming'}</h3>
          <p>{description}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </article>
  )
}

export default Event