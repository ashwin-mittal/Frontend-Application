import React from 'react'
import LandingImage from '../assets/img/landing_page_image.svg'

const LandingPage = () => {
  return (
    <div className="flex items-stretch bg-secondaryPurple min-h-screen">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-6 md:space-y-0 md:flex-row">
        <div className="w-full my-12 flex justify-center md:justify-end md:hidden">
          <a
            href="/create"
            className="text-center p-3 px-6 pt-2 text-white bg-gradient-to-r from-purple to-pink rounded baseline hover:bg-brightRedLight"
          >
            🎉 Create my event
          </a>
        </div>
        <div className="flex justify-center drop-shadow md:w-1/2">
          <img className="w-1/2" src={LandingImage} alt="" />
        </div>
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <div className="flex flex-col space-y-6">
            <div className="max-w-md text-purpleDark text-4xl font-bold text-center md:text-6xl md:text-right">
              <span className="block">Imagine if</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink">
                Snapchat
              </span>
              <span className="block">had events.</span>
            </div>
            <div className="max-w-md text-1xl text-center text-darkGray md:text-2xl md:text-right">
              <span>
                Easily host and share events with your friends across any social
                media.
              </span>
            </div>
          </div>
          <div className="max-w-md hidden justify-center md:justify-end md:flex">
            <a
              href="/create"
              className="text-center p-3 px-6 pt-2 text-white bg-gradient-to-r from-purple to-pink rounded baseline hover:bg-brightRedLight"
            >
              🎉 Create my event
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
