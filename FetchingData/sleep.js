const sleep = (milliseconds) => {
    return new Promise(dothis => setTimeout(dothis, milliseconds))
  }
  
  function sleep2(milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds))

  }
      
const start = Date.now()


sleep(1000)
  .then(() => sleep(1000))
  .then(() => console.log(`${Date.now() - start} milliseconds have elapsed`))


  sleep2(1000)
  .then(sleep2(1000))
  .then(() => console.log(`${Date.now() - start} milliseconds have elapsed`))


  // Promise.reject creates a promise that is always rejected
const rejectedPromise = Promise.reject("I will always be rejected!")

rejectedPromise
    .catch(() => console.log('from inside the rejection handler'))
    .then(value => console.log("I got this", value), () => console.log('hi'))

