import React from 'react'
import ThemeButton from '../theme/themeButton'

const Header = () => {
  return (
    <header>
        <nav>
          <span>W R</span>
          <span className='header-center'>Sorting Visualizer</span>
           <span className='header-right'><ThemeButton/></span> 
        </nav>
    </header>
  )
}

export default Header