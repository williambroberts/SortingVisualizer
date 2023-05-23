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
        generateNewHuesArray,run
        } = useContext(SortingContext)
    
  return (
    <div className='settings'>
        <button onClick={()=>run()}>run</button>
        
        <input type="number" value={sleepTime} onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} name="sleepTime-input" min="0" max="100" />
        <input type='number' value={length} onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} name="length-input" min="10" max="100"/>
        <button onClick={()=>generateNewHuesArray()}>new array</button>
        <select id="algorithDropdown" onChange={(e)=>setAlgorithm(e.target.value)}>
           
  <option value="0">Bubble Sort</option>
  
</select>
    </div>
  )
}

export default SettingsPanel