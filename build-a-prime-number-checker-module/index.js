function isPrime(num) {
    if (num <= 1) return false;

    for(let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//console.log(isPrime(3));

module.exports = { isPrime }


//Arrow function
// const prime = (num) => {
//     if (num <= 1) return false;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(prime(1));