"use client"
import React, { useContext, useEffect, useState } from 'react'
import { SortingContext } from '@/contexts/sortingContext'
import { v4 as uuidv4 } from 'uuid'
const Display = () => {

    const {NumCols,setNumCols,
      NumRows,setNumRows,
      length,setLength,
      hues,setHues,
      sleepTime,setSleepTime,
      algorithm,setAlgorithm,
      pause,setPause,isRun,
      generateNewHuesArray,stop,alpha,lightness,saturation,setIsSquares,squares,
      changeIndex,inspectIndex,swapIndex,hasEnded,
      setIsGraphAndGradient,isGraphAndGradient,
      } = useContext(SortingContext)
    
  if (hues.length<3 && !isRun){
    //console.log(isRun,"is run")
    return (
      <div className='display-wrapper'>
        <span>Please select an Array length of at least 3</span>
      </div>
    )
  }
  
  
  return (
   

  <div>
    {isGraphAndGradient===1? 
    <div className='display' style={{gridTemplateColumns:`repeat(${NumCols},1fr)`,gridTemplateRows:`repeat(${NumRows},1fr)`}}>
       {hues.map((item,index)=>
         ( <div className='display-item'
          key={uuidv4()} style={{backgroundColor:`hsla(${item},${saturation}%,${lightness}%,${alpha})`}}> </div>)

       )}
   </div>
  :
  <div>
  <div className='display2' style={{gridTemplateColumns:`repeat(${length-1},1fr)`,display:`${isGraphAndGradient===2?"none":""}`}} >
      {hues.slice(0,hues.length-1).map((item,index)=> (
        <div key={uuidv4()} className='gradient-item' style={{ backgroundImage: `linear-gradient(to right, hsla(${item},${saturation}%,${lightness}%,${alpha}),  hsla(${hues[index+1]},${saturation}%,${lightness}%,${alpha}))`}}></div>
      )
       ) }
  </div>

        <div className='display3' style={{display:`${isGraphAndGradient===3? "none":''}`}}>
            {hues.map((item,index)=> (
              <div key={uuidv4()} className='graph-item' style={{height:`${item/3.6}%`,backgroundColor:`${hasEnded===true? "var(--purple)": index===inspectIndex? "var(--yellow2)": index===changeIndex? 'var(--palegreen)': index===swapIndex?'var(--paleblue':''}`}}><abbr title={item}></abbr></div>
            ) )}
        </div>
        </div>
        
      }
   </div>
  )
}

export default Display

//width,height,algorith,speed,pause,new arr,color, lightness, saturations,