import React from 'react'
import { useNavigate } from 'react-router-dom'

import BirthdayCake from '../assets/img/birthday_cake.png'

const CreateEventPage = () => {
  const [eventName, setEventName] = React.useState('')
  const [hostName, setHostName] = React.useState('')
  const [eventStart, setEventDate] = React.useState('')
  const [eventEnd, setEventTime] = React.useState('')
  const [eventLocation, setEventLocation] = React.useState('')

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(eventName, hostName, eventStart, eventEnd, eventLocation)
    navigate('/event')
  }

  return (
    <div className="flex flex-col bg-secondaryRed items-center justify-center min-h-screen">
      <div className="drop-shadow  md:w-1/4 md:h-1/4">
        <img src={BirthdayCake} alt="" />
      </div>
      <div className="flex flex-col my-6 items-center justify-center space-y-6">
        <h2 className="text-4xl font-bold text-center">Event Details</h2>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            className="px-4 rounded-full focus:outline-none"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <input
            type="text"
            className="px-4 rounded-full focus:outline-none"
            placeholder="Host Name"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
          <input
            type="datetime-local"
            className="px-4 rounded-full focus:outline-none"
            placeholder="Start Date and Time"
            value={eventStart}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <input
            type="datetime-local"
            className="px-4 rounded-full focus:outline-none"
            placeholder="End Date and Time"
            value={eventEnd}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <input
            type="text"
            className="px-4 rounded-full focus:outline-none"
            placeholder="Location"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white rounded-full bg-red hover:bg-purpleDark focus:outline-none"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateEventPage
