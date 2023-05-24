"use client"
import React, { useContext } from 'react'
import ThemeButton from '../theme/themeButton'
import { SortingContext } from '@/contexts/sortingContext'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({weight:['400'],style:["normal"],subsets:["emoji"]})
const Header = () => {

  const {algorithNames,algorithm}=useContext(SortingContext)
  console.log(algorithNames,algorithm)
  return (
    <header>
        <nav>
          <span className='header-icon'></span>
         
          <span className='header-center'>{algorithm!==undefined? algorithNames[algorithm]:'Sorting Visualizer'}</span>
           <span className='header-right'><ThemeButton/></span> 
        </nav>
    </header>
  )
}

export default Header