"use client"
import React, { useContext } from 'react'
import { SortingContext } from '@/contexts/sortingContext'
import FlexCol from '../setup/flexCol'
const SettingsPanel = () => {
    const {NumCols,setNumCols,
        NumRows,setNumRows,
        length,setLength,
        hues,setHues,
        sleepTime,setSleepTime,
        algorithm,setAlgorithm,
        pause,setPause,
        generateNewHuesArray,run,stop,setStop,
        setSaturation,saturation,setAlpha,alpha,setLightness,lightness
        } = useContext(SortingContext)
    const handleStop = (e)=>{
        // reload page
        setStop(false)
       setHues([])
        console.log("stopped")
        history.go(0);
        e.preventDefault()
       // location.reload();
    }
  return (
    <div className='settings'>
        <div className='control-container'>

        
        <button  className="light-button"
        onClick={()=>run()}>run</button>
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>sleep Time</span>
        <input type="number" value={sleepTime} onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} name="sleepTime-input" min="0" max="100" />
        </div>
        <input type='range' min="0" max="100"  onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} value={sleepTime} name="sleepTime-range"/>
        </FlexCol>
        
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Number of Squares</span>
        <input type='number' value={length} onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} name="length-input" min="10" max="100"/>
        </div>
        <input type='range' min="10" max="100" onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} value={length} name="length-range"/>
        </FlexCol>
        
        <button onClick={()=>generateNewHuesArray()}>new array</button>

        <select id="algorithDropdown" onChange={(e)=>setAlgorithm(e.target.value)}>
  <option value="0">Bubble Sort</option>
</select>
</div>
<button onClick={(e)=>handleStop(e)} >stop</button>
    </div>
  )
}

export default SettingsPanel