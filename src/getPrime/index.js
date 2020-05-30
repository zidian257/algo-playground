const makeGetPrime = () => {
  const primes = [];

  return () => {
    const last = primes[primes.length - 1];

    if (primes.length < 1) {
      primes.push(2);
      return 2;
    }

    let newInt = last;
    let isNextPrime = false;

    while (!isNextPrime) {
      newInt++;
      isNextPrime = primes.every(p => newInt % p !== 0);
    }

    primes.push(newInt);
    return newInt;
  };
};

const getPrime = makeGetPrime();

console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
