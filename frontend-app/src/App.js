import React from 'react'

import LandingPage from './components/LandingPage'
import EventPage from './components/EventPage'
import CreateEventPage from './components/CreateEventPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/create" element={<CreateEventPage />} />
      </Routes>
    </Router>
  )
}

export default App
