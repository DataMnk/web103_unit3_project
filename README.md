# web103_unit3_project
# WEB103 Project 3 - Alpine Village

Submitted by: **Diana Gomez**

About this web app: **a virtual community space for Alpine Village, a mountain town inspired by the Swiss/Austrian Alps. users can explore 4 locations on an interactive map and view events happening at each one. built with React, Express, and PostgreSQL.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [ ] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Alpine Village theme with custom mountain background image
- [x] Interactive SVG map with hover effects showing location names

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/ZB7keIC' title='Video Walkthrough' width='' alt='Video Walkthrough' />
https://imgur.com/a/ZB7keIC
<img width="1179" height="987" alt="alpine-village" src="https://github.com/user-attachments/assets/ee50cdf6-c979-4ac2-b966-a9d7ca1ff330" />


GIF created with ScreenToGif

## Notes

main challenge was dotenv path resolution when running reset.js from the project root — fixed using fileURLToPath to locate the .env relative to the config directory. also had to use the external Render hostname for local development connections.

## License

Copyright 2026 Diana Gomez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
