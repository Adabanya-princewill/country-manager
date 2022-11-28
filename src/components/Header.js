import { NavLink } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'

const Header = () => {

  return (
    <div className='w-full shadow-md' >
      <div className="py-4 mx-auto max-w-screen-xl mb-8 lg:mb-8">
        <div className="relative flex items-center justify-between">
          <NavLink to="/" end>
            <span className="px-4 md:text-xl text-sm font-bold text-gray-800">Where in the world?</span>
          </NavLink>
          <button className="flex items-center lg:flex">
            <span
              className="pr-5 lg:mr-4 inline-flex items-center justify-center md:text-xl tex-sm text-gray-800"
            >
              <FaMoon
                id="theme-toggle"
                className="text-gray-500 mr-2 h-4"
              /> Dark mode
            </span>

          </button>

        </div>
      </div>

    </div>
  )
}

export default Header