"use client"
import React, { useContext } from 'react'
import { SortingContext } from '@/contexts/sortingContext'
const SettingsPanel = () => {
    const {NumCols,setNumCols,
        NumRows,setNumRows,
        length,setLength,
        hues,setHues,
        sleepTime,setSleepTime,
        algorithm,setAlgorithm,
        pause,setPause,
        generateNewHuesArray,
        } = useContext(SortingContext)
    
  return (
    <div className='settings'>
        <input type='number' value={length} onChange={(e)=>setLength((prev)=>e.target.value)} name="length-input" min="10" max="100"/>
    </div>
  )
}

export default SettingsPanel