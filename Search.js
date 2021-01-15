//Linear Search - O(n)

function findElement(arr, element){
  for(let i=0;i<arr.length;i++){
    if(arr[i] == element){
      return i
    }
  }
  return false
}


let arr = [1, 5,3, 4, 33, 9]

findElement(arr, 33) 

//Binary Search

// Only works for sorted array

function findElement(arr, element){
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while(startIndex <= endIndex){
    const middleIndex = startIndex + Math.floor((endIndex - startIndex)/2)
    if(element == arr[middleIndex]){
      return middleIndex
    }
    if(element < arr[middleIndex]){
      endIndex = middleIndex - 1
    }else{
      startIndex = middleIndex + 1
    }
  }
}


let arr = [1, 3, 4, 5 , 33, 76, 89, 99]

findElement(arr, 33)
