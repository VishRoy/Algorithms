
function fact(n){
  if(n===1) return 1
  return n * fact(n-1)
}


// In every function call => O(1)
// But we trigger multiple function calls => n function calls 
// T = n * O(1) => O(n)

function fib(n){
  if(n===0 || n===1) return 1
  return fib(n-1) + fib(n-2)
}

fib(4) // 9 function calls
fib(5) // 15 function calls even when the number is only increased by 1 
fib(6) // 25 function calls even when the number is only increased by 1 

// T = O(2^n) => Exponential Time Complexity
