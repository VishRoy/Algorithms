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
