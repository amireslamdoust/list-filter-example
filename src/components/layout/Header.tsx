import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full ">
          <div className="relative pt-6 px-4 sm:px-6 px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/" aria-label="Home">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://adviqo.com/app/uploads/2019/04/adviqo_logo_rgb.jpg"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:block md:ml-10 md:pr-4">
                <Link
                  to="/"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Product
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                WE DEVELOP PRODUCTS THAT
                <br className="hidden md:inline" />
                <span className="text-indigo-600">CONNECT PEOPLE WITH PEOPLE</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                adviqo is a global media house and international market leader in the esoteric
                marketplace segment. adviqo operates digital marketplaces for the monetization of
                life coaching, astrology and psychic readings. We develop technical solutions that
                enable people to connect with a reader, psychic or life coach on their phones or in
                live chats.
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
                >
                  <img
                    className="w-full"
                    src="https://adviqo.com/app/uploads/2019/04/adviqo-homepage-1-2.jpg"
                    alt="LOLe"
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <svg
                      className="h-20 w-20 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Header
