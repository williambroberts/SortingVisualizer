"use client"
import React, { useContext } from 'react'
import ThemeButton from '../theme/themeButton'
import { SortingContext } from '@/contexts/sortingContext'
const Header = () => {
  const {algorithNames,algorithm}=useContext(SortingContext)
  return (
    <header>
        <nav>
          <span>W R</span>
          <span className='header-center'>Sorting Visualizer: {algorithNames[algorithm]}</span>
           <span className='header-right'><ThemeButton/></span> 
        </nav>
    </header>
  )
}

export default Header