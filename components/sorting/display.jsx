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
      generateNewHuesArray,
      } = useContext(SortingContext)
    

  
  console.log(hues)
  return (
   <div className='display' style={{gridTemplateColumns:`repeat(${NumCols},1fr)`,gridTemplateRows:`repeat(${NumRows},1fr)`}}>
       {hues.map((item,index)=>
         ( <div className='display-item'
          key={uuidv4()} style={{backgroundColor:`hsl(${item},100%,50%)`}}> </div>)

       )}
   </div>
  )
}

export default Display

//width,height,algorith,speed,pause,new arr,color, lightness, saturations,