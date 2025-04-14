const num = 30

function returnPrime(n) {
    
    const primes = []
    
    for (let i = 2; i <= n; i++) {       // Check numbers 2 to n
        let isPrime = true;                // Assume i is prime initially
        for (let j = 2; j * j <= i; j++) { // Check divisors up to √i
          if (i % j === 0) {               // If divisible → NOT prime
            isPrime = false;
            break;
          }
        }
        if (isPrime) primes.push(i);       // Push primes
      }
      console.log(primes)
    }
 
returnPrime(num)

// let isPrime = true; // Start by assuming the number is cool (prime) until proven guilty.
// for (let j = 2; j * j <= n; j++) { // Check every number from 2 up to the square root of i.
//   if (n % j === 0) { // If i can be divided evenly by j...
//     isPrime = false; // ...it's NOT prime (like finding out your date hates pizza).
//     break; // Stop checking—no need to waste time. Move to the next number.
//   }
// }
// if (isPrime) console.log(n); // If it survived the checks, it's prime! Celebrate. 🎉

