"use client"
import React, { useContext, useEffect } from 'react'
import { SortingContext } from '@/contexts/sortingContext'
import FlexCol from '../setup/flexCol'
import IconSettingsOutline from '../icons/settings'
import { useRouter } from 'next/navigation';
const SettingsPanel = () => {
    const router = useRouter();
    const {NumCols,setNumCols,
        NumRows,setNumRows,
        length,setLength,
        hues,setHues,
        sleepTime,setSleepTime,
        algorithm,setAlgorithm,
        pause,setPause,
        generateNewHuesArray,run,stop,setStop,
        setIsGraphAndGradient,isGraphAndGradient,
        setSaturation,saturation,setAlpha,alpha,setLightness,lightness,isDisabled,setIsSquares,squares
        } = useContext(SortingContext)
    const handleStop = (e)=>{
        // reload page
        setStop(false)
       setHues([])
        console.log("stopped")
        history.go(0);
        //router.refresh()
        e.preventDefault()
       // location.reload();
    }

    const handleReset = () =>{
        setAlpha(1)
        //setHues([])
        setLightness(50)
        setSaturation(100)
        setSleepTime(0)
        setLength(0)
    }
    
  return (
    <div className='settings'>
        <div className='control-container'>
            <h6 className='control-title'><span><IconSettingsOutline/></span> Settings</h6>
        <div className='buttons-flex'>
        <button  className="run-button" disabled={isDisabled} style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>run()}>Run</button>
 <button className='new-array-button'
 onClick={()=>generateNewHuesArray()} disabled={isDisabled} style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}>new array</button>
 <button  className="stop-button" onClick={(e)=>handleStop(e)} >Stop</button>
<button  className="reset-button" onClick={()=>handleReset()} disabled={isDisabled} style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}>Reset</button>
        </div>
        <div className='buttons-flex'>
        <span className='setting-name'>Select algorithm</span>
        <select id="algorithDropdown" onChange={(e)=>setAlgorithm(parseInt(e.target.value))} disabled={isDisabled}>
  <option value="0">Bubble sort</option>
  <option value="1">Selection sort</option>
  <option value="2">Insertion sort</option>
  <option value="3">Cycle sort</option>
</select>
        </div>
      
        <div className='buttons-flex'>
        <span className='setting-name'>Select Display</span>
        <select id="displayDropdown" onChange={(e)=>setIsGraphAndGradient(parseInt(e.target.value))} disabled={isDisabled}>
  
  <option value="0"> Graph & gradient</option>
  <option value="1">Squares</option>
  <option value="2"> Graph only</option>
  <option value="3"> Gradient only</option>
</select>
        </div>


        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Sleep time (ms)</span>
        <button className='settings-button-p' onClick={()=>setSleepTime((prev)=>prev===100? prev: prev+1)}  disabled={isDisabled} 
        style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        >+</button>
        <input type="number" value={sleepTime} onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} name="sleepTime-input" min="0" max="100" disabled={isDisabled}/>
        {/* <span className='setting-units'><abbr title='milliseconds'>ms</abbr></span> */}
        <button className='settings-button' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setSleepTime((prev)=>prev===0? 0:prev-1)}  disabled={isDisabled}>-</button>
        </div>
        <input className="input-range"
        type='range' min="0" max="100"  onChange={(e)=>setSleepTime((prev)=>parseInt(e.target.value))} value={sleepTime} name="sleepTime-range" disabled={isDisabled}/>
        </FlexCol>
        
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Array length</span>
        <button className='settings-button-p' onClick={()=>setLength((prev)=>prev===100? prev: prev+1)} style={{backgroundColor:`${length<3? "var(--neongreen)":""}`}}>+</button>
        <input type='number' value={length} onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} name="length-input" min="10" max="100" disabled={isDisabled}/>
        {/* <span className='setting-units'><abbr title='integer'>int</abbr></span> */}
        <button className='settings-button' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setLength((prev)=>prev<=3? 3: prev-1)}  disabled={isDisabled}>-</button>
        </div>
        <input className="input-range" 
        type='range' min="3" max="100" onChange={(e)=>setLength((prev)=>parseInt(e.target.value))} value={length} name="length-range" disabled={isDisabled}/>
        </FlexCol>
        
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Lightness (%)</span>
        <button className='settings-button-p' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setLightness((prev)=>prev===100? prev: prev+1)}  disabled={isDisabled}>+</button>
        <input type="number" value={lightness} onChange={(e)=>setLightness((prev)=>parseInt(e.target.value))} name="lightness-input" min="0" max="100" disabled={isDisabled}/>
        {/* <span className='setting-units'><abbr title='percentage'>%</abbr></span> */}
        <button className='settings-button' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setLightness((prev)=>prev===0? prev: prev-1)}  disabled={isDisabled}>-</button>
        </div>
        <input className="input-range"
        type='range' min="0" max="100"  onChange={(e)=>setLightness((prev)=>parseInt(e.target.value))} value={lightness} name="lightness-range" disabled={isDisabled}/>
        </FlexCol>

        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Saturation (%)</span>
        <button className='settings-button-p' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setSaturation((prev)=>prev===100? prev: prev+1)}  disabled={isDisabled}>+</button>
        <input type="number" value={saturation} onChange={(e)=>setSaturation((prev)=>parseInt(e.target.value))} name="saturation-input" min="0" max="100" disabled={isDisabled}/>
        {/* <span className='setting-units'><abbr title='percentage'>%</abbr></span> */}
        <button className='settings-button' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setSaturation((prev)=>prev===0? prev: prev-1)}  disabled={isDisabled}>-</button>
        </div>
        <input className="input-range"
        type='range' min="0" max="100"  onChange={(e)=>setSaturation((prev)=>parseInt(e.target.value))} value={saturation} name="saturation-range" disabled={isDisabled}/>
        </FlexCol>
        <FlexCol>
        <div className='input-flex'>
        <span className='setting-name'>Alpha</span>
        <button className='settings-button-p' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setSaturation((prev)=>prev===1? prev: prev+0.01)}  disabled={isDisabled}>+</button>
        <input type="number" value={alpha} onChange={(e)=>setAlpha((prev)=>parseInt(e.target.value))} name="alpha-input" min="0" max="100" disabled={isDisabled}/>
        {/* <span className='setting-units'></span> */}
        <button className='settings-button' style={{backgroundColor:`${isDisabled? "var(--bg-4)" : ""}`}}
        onClick={()=>setLightness((prev)=>prev===0? prev: prev-0.01)}  disabled={isDisabled}>-</button>
        </div>
        <input className="input-range"
        type='range' min="0" max="1"  step="0.01" onChange={(e)=>setAlpha((prev)=>parseFloat(e.target.value))} value={alpha} name="alpha-range" disabled={isDisabled}/>
        </FlexCol>
       
        
        
</div>

    </div>
  )
}

export default SettingsPanel