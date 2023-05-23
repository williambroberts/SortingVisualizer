"use client"
import sleep from "../components/algorithms/algorithms"
import BubbleSort from "../components/algorithms/algorithms"
import React, { createContext, useState,useEffect } from 'react'

export const SortingContext = createContext({})
const SortProvider = ({children}) => {
    const [NumCols,setNumCols]=useState(0)
    const [NumRows,setNumRows]=useState(0)
    const [length,setLength]=useState(0)
    const [hues,setHues]=useState([1,2,12,123,1,123,345,32,1,67,200,99,213])
    const squares  = [1,4,9,16,25,36,49,64,81,100,132,144,169,196]

    const [sleepTime,setSleepTime]=useState(0)
    const [algorithm,setAlgorithm]=useState(undefined)
    const [pause,setPause]=useState(false)
    
    const chooseAlgorithm = (selection)=>{
      setAlgorithm((prev)=>selection)
    }

    const generateNewHuesArray = () => {
      generateHues(length)
    }

    const findClosestValue = (squares,length) =>{
      let closest = squares[0]
      for (let i=0; i<squares.length;i++){
          if (squares[i]<length){
            closest = squares[i]
          }
      }
    closest=squares[(squares.indexOf(closest)+1)]
    console.log(closest,"closest")
    return Math.sqrt(closest)
    }

    const run = (algorithm,sleepTime,setHues,hues,pause) =>{
        algorithm(hues,sleepTime,setHues)
    }

    const generateHues = (length) =>{
      let newHues=[]
      for (let i=0;i<length;i++){
        let newNum = Math.floor(Math.random()*360)
        newHues.push(newNum)
      }
      

      
      setHues((prev)=>newHues)
    }
    useEffect(()=>{
      const size = findClosestValue(squares,length)
      console.log(size,"size")
      setNumCols((prev)=>size)
      setNumRows((prev)=>size)
      generateHues(length)
    },[length])
  return (
    <SortingContext.Provider value={{NumCols,setNumCols,
    NumRows,setNumRows,
    length,setLength,
    hues,setHues,
    sleepTime,setSleepTime,
    algorithm,setAlgorithm,
    pause,setPause,
    generateNewHuesArray,
    }}>
        {children}
    </SortingContext.Provider>
  )
}

export default SortProvider

// NumCols,NumRows,algorith,speed,pause,new arr,color, lightness?, saturations? //auto /default settings