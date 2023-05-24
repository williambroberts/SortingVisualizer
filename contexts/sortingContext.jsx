"use client"
//import { selectionSort } from '@/components/algorithms/algorithms'
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
  const algorithms = [BubbleSort,SelectionSort]
    const [sleepTime,setSleepTime]=useState(0)
    const [algorithm,setAlgorithm]=useState(undefined)
    const [pause,setPause]=useState(false)
    const [stop,setStop]=useState(false)
  const [saturation,setSaturation]=useState(100)
  const [alpha,setAlpha]=useState(1)
  const [lightness,setLightness]=useState(50)
  const[isDisabled,setIsDisabled] = useState(false)
  const [isSquares,setIsSquares] = useState(false)
  const [changeIndex,setchangeIndex]=useState()
  const [inspectIndex,setInspectIndex]=useState()
  const [swapIndex,setSwapIndex]=useState()
  const [hasEnded,setHasEnded]=useState(false)
    const sleep = (milliSeconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliSeconds))
    }	

    async function SelectionSort(sleep,arr,sleepTime,setState,stop){
      console.log("SelectionSort",stop)
      for (let i=0; i<arr.length-1;i++){
        let rowLen = arr.length-i
        let rowMax = 0
        let rowMaxIndex = 0
        for (let j=0; j<rowLen;j++){
          setInspectIndex(j)
           await sleep(sleepTime)

          if (arr[j]> rowMax){
            rowMax = arr[j], rowMaxIndex = j
          }
        }
       let temp = arr[rowLen-1]
       
       arr[rowLen-1]=rowMax
       arr[rowMaxIndex]=temp
      
        setState([...arr])
      }
    }
   
    async function BubbleSort(sleep,arr,sleepTime,setState,stop) {
      console.log("BubbleSort",stop)
      for(let i = 0; i < arr.length; i++) {
          
          for(let j = 0; j < ( arr.length - i -1 ); j++) {
            setInspectIndex(j)
            await sleep(sleepTime)
             
              
              if(arr[j] > arr[j+1]) {
                setInspectIndex(-1)
                 setchangeIndex(j)
                 setSwapIndex(j+1)
                 await sleep(sleepTime/2)
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                setSwapIndex(j)
                setchangeIndex(j+1)
                await sleep(sleepTime/2)
                setState([...arr])
                setSwapIndex(-1)
                setchangeIndex(-1)
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
      setIsDisabled((prev)=>true)
      window.scrollTo(0,0)
      console.log(hues,"hues")
      if (hues.length < 3){
        alert("please select an Array length")
        setIsDisabled((prev)=>false)

        return
      }
      let algorithStringNumber = document.querySelector("#algorithDropdown")
      let algorithNumber = parseInt(algorithStringNumber.value)
      console.log(algorithNumber,"alg number",algorithStringNumber)
      setAlgorithm((prev)=> {return algorithms[algorithNumber]})
     // console.log("Run",algorithms[algorithNumber],hues,sleepTime)
     await algorithms[algorithNumber](sleep,hues,sleepTime,setHues,stop)
      setIsDisabled((prev)=>false)
     
      setHasEnded(true)
      await(sleep(1000))
      setHasEnded(false)
      setInspectIndex(-1)

      // graphItems.forEach((item)=>console.log(item.style))
      // graphItems.forEach((item)=> item.style.backgroundColor="var(--blue)")
      // setTimeout(()=>{
      //   graphItems.forEach((item)=> item.style.backgroundColor="var(--white)")
      // },1000)
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
    setSaturation,saturation,setAlpha,alpha,setLightness,lightness,isDisabled,setIsSquares,squares,
    changeIndex,inspectIndex,swapIndex,hasEnded
    }}>
        {children}
    </SortingContext.Provider>
  )
}

export default SortProvider

// NumCols,NumRows,algorith,speed,pause,new arr,color, lightness?, saturations? //auto /default settings