"use client"
//import sleep from "../components/algorithms/algorithms"
//import {BubbleSort} from "../components/algorithms/algorithms"
import React, { createContext, useState,useEffect } from 'react'

export const SortingContext = createContext({})
const SortProvider = ({children}) => {
    const [NumCols,setNumCols]=useState(0)
    const [NumRows,setNumRows]=useState(0)
    const [length,setLength]=useState(0)
    const [hues,setHues]=useState([])
    const squares  = [1,4,9,16,25,36,49,64,81,100,132,144,169,196]
  const algorithms = [BubbleSort]
    const [sleepTime,setSleepTime]=useState(0)
    const [algorithm,setAlgorithm]=useState(undefined)
    const [pause,setPause]=useState(false)
    const [stop,setStop]=useState(false)
  const [saturation,setSaturation]=useState(100)
  const [alpha,setAlpha]=useState(1)
  const [lightness,setLightness]=useState(50)
    const sleep = (milliSeconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliSeconds))
    }	


   
    async function BubbleSort(sleep,arr,sleepTime,setState,pause,stop) {
      console.log("here",stop)
      for(var i = 0; i < arr.length; i++) {
          
          for(var j = 0; j < ( arr.length - i -1 ); j++) {
              console.log("here",stop,hues.length)
              
              if(arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                await sleep(sleepTime)
                setState([...arr])
              }
          }
      }
  }
   
  

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
    //console.log(closest,"closest")
    return Math.sqrt(closest)
    }

    const run = async () =>{
      window.scrollTo(0,0)
      console.log(hues,"hues")
      if (hues.length < 10){
        console.log("sra")
        return
      }
      let algorithStringNumber = document.querySelector("#algorithDropdown")
      let algorithNumber = algorithStringNumber.value 
      setAlgorithm((prev)=> {return algorithms[algorithNumber]})
     // console.log("Run",algorithms[algorithNumber],hues,sleepTime)
     await algorithms[algorithNumber](sleep,hues,sleepTime,setHues,pause,stop)
      
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
    run,stop,setStop,
    setSaturation,saturation,setAlpha,alpha,setLightness,lightness
    }}>
        {children}
    </SortingContext.Provider>
  )
}

export default SortProvider

// NumCols,NumRows,algorith,speed,pause,new arr,color, lightness?, saturations? //auto /default settings