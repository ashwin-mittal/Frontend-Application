import React from 'react'
import { ImCalendar } from 'react-icons/im'
import { ImLocation } from 'react-icons/im'

import BirthdayCake from '../assets/img/birthday_cake.png'

const EventPage = (props) => {
  console.log(props)

  return (
    <div className="flex items-stretch bg-gray-100 min-h-screen">
      <div className="container flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row">
        <div className="w-full px-6 flex flex-col my-16 md:w-1/2 md:px-0">
          <div className="max-w-md text-purpleDark text-4xl font-bold text-left md:text-6xl">
            <span className="block">Birthday Bash</span>
          </div>
          <div className="max-w-md text-1xl text-left text-lightGray md:text-2xl">
            <span>
              Hosted by <b>Elysia</b>
            </span>
          </div>
          <div className="flex flex-col mt-16 space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full md:py-1">
                    <ImCalendar />
                  </div>
                  <h3 class="text-base font-bold text-purpleDark md:hidden">
                    18 August 6:00PM
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden text-purpleDark text-lg font-bold md:block">
                  18 August 6:00PM
                </h3>
                <p class="text-purpleDark">
                  to <b>19 August 1:00PM</b> UTC +10
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full md:py-1">
                    <ImLocation />
                  </div>
                  <h3 class="text-base font-bold text-purpleDark md:hidden">
                    Street name
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden text-purpleDark text-lg font-bold md:block">
                  Street name
                </h3>
                <p class="text-purpleDark">Suburb, State, Postcode</p>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow md:w-1/2">
          <img src={BirthdayCake} alt="" />
        </div>
      </div>
    </div>
  )
}

export default EventPage
