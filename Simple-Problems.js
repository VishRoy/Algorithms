
1. Sum of all the items in an array

function sum(arr){
  return arr.reduce((a,b)=> a+b, 0)  // O(n)
}


sum([1,3,10])

2. Fibonacci Series

function fib(n){
  let f0 = 1;
  let f1 = 1;
  let fib = 0;

  if(n>2){
    for(let i=2;i<=n;i++){
      fib = f0 + f1
      f0 = f1
      f1 = fib
    }
  } 
  return fib
}

fib(4)

function fib(n){
  let numbers = [1,1]
  for(let i=2;i<=n;i++){
    numbers.push(numbers[i-2]+numbers[i-1])
  }
  return numbers[n]
}

fib(4)

3. Check whether the given number is a prime number

function isPrime(n){
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i === 0){
      return false
    }
  }
  return true
}

console.log(isPrime(5))
console.log(isPrime(9))

4. Find the minimum value in an array

function min(arr){
  return Math.min(...arr)
}

min([1,4,5,3,2]) // O(n)

5. Check if the given input is even

function even(n){
  if(n%2===0) return true
  return false
}

console.log(even(5)) //O(1)
console.log(even(82))

6. Check if the given input is power of two

function isPowerOfTwo(num){
  if(num<=1) return false;
  let dividedNum = num;
  while(dividedNum !==1){
    if(dividedNum % 2 !== 0) {return false}
    dividedNum = dividedNum / 2;
  }
  return true;
} // O(log2 n)


function isPowerOfTwo(num){
  if(num < 0) return false
  return (num & (num-1)) === 0;
}

console.log(isPowerOfTwo(16)) // O(1)

7. Factorial

function fact(n){
  if(n === 1) return 1
  let fact = 1;
  for(i=2;i<=n;i++){
      fact = fact * i
  }
  return fact
}

console.log(fact(5))
