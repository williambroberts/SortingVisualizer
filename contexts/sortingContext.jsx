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
  const algorithms = [BubbleSort,SelectionSort,InsertionSort,CycleSort,MergeSort]
  const algorithNames = ["Bubble sort","Selection sort","Insertion sort","Cycle sort","Merge Sort"]
    const [sleepTime,setSleepTime]=useState(0)
    const [algorithm,setAlgorithm]=useState(0)
    const [pause,setPause]=useState(false)
    const [stop,setStop]=useState(false)
  const [saturation,setSaturation]=useState(100)
  const [alpha,setAlpha]=useState(1)
  const [lightness,setLightness]=useState(65)
  const[isDisabled,setIsDisabled] = useState(false)
  const [isSquares,setIsSquares] = useState(false)
  const [changeIndex,setchangeIndex]=useState()
  const [inspectIndex,setInspectIndex]=useState()
  const [swapIndex,setSwapIndex]=useState()
  const [hasEnded,setHasEnded]=useState(false)
  const [isGraphAndGradient,setIsGraphAndGradient]=useState(true)
  const [isRun,setIsRun]=useState(false)


    const sleep = (milliSeconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliSeconds))
    }	

     function MergeSort(sleep,arr,sleepTime,setState,stop) {
      //console.log("mergesort arr length",arr.length)
      // await sleep(sleepTime)
      if (arr?.length <2){
       
        return arr
    }
    let left = arr.splice(0,arr.length/2)
    let right = arr
   // await sleep(sleepTime)
    let newArr= merge(MergeSort(sleep,left,sleepTime,setState,stop),MergeSort(sleep,right,sleepTime,setState,stop),setHues)
    return newArr
  }
const merge =  (one,two,setState)=>{
 // console.log("merge one , two  ",one,two)
    let x = []
   // setInspectIndex(one[0])
   // setchangeIndex(two[0])
    //await sleep(sleepTime)
    while (one?.length && two?.length) {
     // setInspectIndex(one[0])
      //setchangeIndex(two[0])
      //await sleep(sleepTime)
        if (one[0]< two[0]){
         // setInspectIndex(-1)
           //   setchangeIndex(one[0])
             // setSwapIndex(two[0])
             // await sleep(sleepTime/2)
            x.push(one.shift())
        }else {
         // setInspectIndex(-1)
         // setchangeIndex(two[0])
         // setSwapIndex(one[0])
         // await sleep(sleepTime/2)
            x.push(two.shift())
        }
        //setState([...x])
       // setSwapIndex(-1)
       // setchangeIndex(-1)
    }
   
    while (one?.length){
     // setInspectIndex(one[0])
      //await sleep(sleepTime)
     // setInspectIndex(-1)
      //setchangeIndex(one[0])
      //await sleep(sleepTime)
      //setchangeIndex(-1)
        x.push(one.shift())
        //setState([...x])
    }
    while (two?.length){
     // setInspectIndex(two[0])
      //await sleep(sleepTime)
     // setInspectIndex(-1)
      //setchangeIndex(two[0])
     // await sleep(sleepTime)
     // setchangeIndex(-1)
        x.push(two.shift())
       // setState([...x])
    }
    //console.log(x,"x, merged")
    let newHues = [...hues,...x].slice(x.length)
    setHues(newHues)
    console.log("hues",hues,"newhues",newHues,x,"x")
    return x
}
    

    async function CycleSort(sleep,arr,sleepTime,setState,stop) {
      for (let i=0;i<arr.length-1;i++){
        for (let j=0;j<(arr.length+i);j++){
          setInspectIndex(j)
          await sleep(sleepTime)
            if (arr[j]>arr[j+1]){
              setInspectIndex(-1)
              setchangeIndex(j)
              setSwapIndex(j+1)
              await sleep(sleepTime/2)
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
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
    async function InsertionSort(sleep,arr,sleepTime,setState,stop) {
      
      for (let i=0; i<arr.length-1;i++){
        for (let j=i+1;j>0;j--){
          setInspectIndex(j)
            await sleep(sleepTime)
          if (arr[j]>=arr[j-1]){break}
          else if (arr[j]<arr[j-1]){
            setInspectIndex(-1)
            setchangeIndex(j)
            setSwapIndex(j+1)
            await sleep(sleepTime/2)
            let temp = arr[j]
            arr[j]=arr[j-1]
            arr[j-1]=temp
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

    async function SelectionSort(sleep,arr,sleepTime,setState,stop){
      console.log("SelectionSort",stop)
      for(let i=0;i<arr.length-1;i++){
        let m = 0
        let mi = 0
        
        for (let j=0;j<(arr.length-i);j++){
          setInspectIndex(j)
           await sleep(sleepTime)
            if (arr[j]>m){
                mi = j
                m=arr[j]
            }
        }
        setInspectIndex(-1)
        setchangeIndex(mi)
        setSwapIndex(arr.length-i)
        await sleep(sleepTime/2)
        
        let temp = arr[arr.length-1-i]
        arr[arr.length-1-i]=arr[mi]
        arr[mi]=temp
        setSwapIndex(mi)
        setchangeIndex(arr.length-i)
        await sleep(sleepTime/2)
        setState([...arr])
        setSwapIndex(-1)
        setchangeIndex(-1)
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
                setInspectIndex(-1)
                 setchangeIndex(j)
                 setSwapIndex(j+1)
                 await sleep(sleepTime/2)
              }
          }
      }
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
     
      
      if (hues.length < 3){
        //console.log(length,"length",hues)
        alert("please select an Array length of 3 or more")
        setIsDisabled((prev)=>false)

        return
      }
      setIsRun((prev)=>true)
       window.scrollTo(0,0)
      let algorithStringNumber = document.querySelector("#algorithDropdown")
      let algorithNumber = parseInt(algorithStringNumber.value)
      
     
     await algorithms[algorithNumber](sleep,hues,sleepTime,setHues,stop)
      setIsDisabled((prev)=>false)
     
      setHasEnded(true)
      await(sleep(1000))
      setHasEnded(false)
      setInspectIndex(-1)
      setSwapIndex(-1)
      setchangeIndex(-1)
     setIsRun(false)
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


    useEffect(()=>{
      if (length<3){
        setIsDisabled(true)
      }else{
        setIsDisabled(false)
      }
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
    run,stop,setStop,isRun,
    setSaturation,saturation,setAlpha,alpha,setLightness,lightness,isDisabled,setIsSquares,squares,
    changeIndex,inspectIndex,swapIndex,hasEnded,algorithNames,
    setIsGraphAndGradient,isGraphAndGradient
    }}>
        {children}
    </SortingContext.Provider>
  )
}

export default SortProvider

// NumCols,NumRows,algorith,speed,pause,new arr,color, lightness?, saturations? //auto /default settings