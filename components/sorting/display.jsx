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
      pause,setPause,
      generateNewHuesArray,stop,alpha,lightness,saturation,setIsSquares,squares
      } = useContext(SortingContext)
    

  
  //console.log(hues,"hues,",length,"length")
  return (
  //  <div className='display' style={{gridTemplateColumns:`repeat(${NumCols},1fr)`,gridTemplateRows:`repeat(${NumRows},1fr)`}}>
  //      {hues.map((item,index)=>
  //        ( <div className='display-item'
  //         key={uuidv4()} style={{backgroundColor:`hsla(${item},${saturation}%,${lightness}%,${alpha})`}}> </div>)

  //      )}
  //  </div>
  <div className='display2' style={{gridTemplateColumns:`repeat(${length-1},1fr)`}}>
      {hues.slice(0,hues.length-1).map((item,index)=> (
        <div className='gradient-item' style={{ backgroundImage: `linear-gradient(to right, hsla(${item},${saturation}%,${lightness}%,${alpha}),  hsla(${hues[index+1]},${saturation}%,${lightness}%,${alpha}))`}}></div>
      )
       ) }
  </div>
  )
}

export default Display

//width,height,algorith,speed,pause,new arr,color, lightness, saturations,