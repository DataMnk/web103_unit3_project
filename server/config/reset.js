import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Load .env from server/ directory regardless of where script is run from
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '../.env') })

import { pool } from './database.js'

const createTables = async () => {
  try {
    // Drop existing tables and recreate fresh
    await pool.query(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      -- Locations table: the 4 areas of Alpine Village
      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        image_url TEXT
      );

      -- Events table: activities tied to each location
      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        date TIMESTAMP,
        location_id INTEGER REFERENCES locations(id)
      );

      -- Seed locations
      INSERT INTO locations (name, description, image_url) VALUES
        ('The Lodge', 'The heart of Alpine Village — warm fires, great food, and community gatherings.', '/lodge.jpg'),
        ('Pine Forest Trail', 'A winding trail through ancient pines with breathtaking mountain views.', '/forest.jpg'),
        ('Village Square', 'The open-air plaza where locals meet, trade, and celebrate.', '/square.jpg'),
        ('Mountain Peak', 'The highest point of the village, perfect for stargazing and adventure.', '/peak.jpg');

      -- Seed events
      INSERT INTO events (name, description, date, location_id) VALUES
        ('Winter Bonfire Night', 'Gather around the fire with hot cocoa and live folk music.', '2026-12-20 19:00:00', 1),
        ('Cozy Brunch Meetup', 'Sunday brunch with homemade pastries and mountain views.', '2026-07-13 10:00:00', 1),
        ('Sunrise Hike', 'Early morning guided hike through the pine forest.', '2026-07-19 06:00:00', 2),
        ('Wildflower Walk', 'A relaxed walk to spot seasonal wildflowers along the trail.', '2026-08-02 09:00:00', 2),
        ('Farmers Market', 'Weekly market with local produce, crafts, and food stalls.', '2026-07-12 08:00:00', 3),
        ('Folk Music Festival', 'An afternoon of live folk and acoustic music in the square.', '2026-08-15 14:00:00', 3),
        ('Stargazing Night', 'Guided stargazing session at the peak with telescopes.', '2026-07-25 21:00:00', 4),
        ('Summit Challenge', 'Annual race to the top — all fitness levels welcome.', '2026-09-06 07:00:00', 4);
    `)

    console.log('✅ Tables created and seeded successfully')
  } catch (error) {
    console.error('❌ Error creating tables:', error)
  } finally {
    await pool.end()
  }
}

createTables()