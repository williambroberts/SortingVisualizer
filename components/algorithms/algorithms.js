 export const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }	

export async function BubbleSort(arr,sleepTime,setState,pause) {
    console.log(arr,sleepTime,setState,pause)
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < ( arr.length - i -1 ); j++) {


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



export async function selectionSort(arr,sleepTime,setState,pause) {
   
        for (var i = 0; i < arr.length; i++) {
            let min = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (i != min) {
                [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
            }
        }
        
    }
