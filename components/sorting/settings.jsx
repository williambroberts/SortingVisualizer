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
        setSaturation,saturation,setAlpha,alpha,setLightness,lightness,isDisabled
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

        
        <button  className="light-button" disabled={isDisabled}
        onClick={()=>run()}>run</button>
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>sleep Time</span>
        <input type="number" value={sleepTime} onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} name="sleepTime-input" min="0" max="100" disabled={isDisabled}/>
        </div>
        <input type='range' min="0" max="100"  onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} value={sleepTime} name="sleepTime-range" disabled={isDisabled}/>
        </FlexCol>
        
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Number of Squares</span>
        <input type='number' value={length} onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} name="length-input" min="10" max="100" disabled={isDisabled}/>
        </div>
        <input type='range' min="10" max="100" onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} value={length} name="length-range" disabled={isDisabled}/>
        </FlexCol>
        
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Lightness</span>
        <input type="number" value={lightness} onChange={(e)=>setLightness((prev)=>parseInt(e.target.value))} name="lightness-input" min="0" max="100" disabled={isDisabled}/>
        </div>
        <input type='range' min="0" max="100"  onChange={(e)=>setLightness((prev)=>parseInt(e.target.value))} value={lightness} name="lightness-range" disabled={isDisabled}/>
        </FlexCol>

        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Saturation</span>
        <input type="number" value={saturation} onChange={(e)=>setSaturation((prev)=>parseInt(e.target.value))} name="saturation-input" min="0" max="100" disabled={isDisabled}/>
        </div>
        <input type='range' min="0" max="100"  onChange={(e)=>setSaturation((prev)=>parseInt(e.target.value))} value={saturation} name="saturation-range" disabled={isDisabled}/>
        </FlexCol>
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Alpha</span>
        <input type="number" value={alpha} onChange={(e)=>setAlpha((prev)=>parseInt(e.target.value))} name="alpha-input" min="0" max="100" disabled={isDisabled}/>
        </div>
        <input type='range' min="0" max="1"  step="0.01" onChange={(e)=>setAlpha((prev)=>parseFloat(e.target.value))} value={alpha} name="alpha-range" disabled={isDisabled}/>
        </FlexCol>
        <button onClick={()=>generateNewHuesArray()} disabled={isDisabled}>new array</button>

        <select id="algorithDropdown" onChange={(e)=>setAlgorithm(e.target.value)} disabled={isDisabled}>
  <option value="0">Bubble Sort</option>
</select>
</div>
<button onClick={(e)=>handleStop(e)} >stop</button>
    </div>
  )
}

export default SettingsPanel