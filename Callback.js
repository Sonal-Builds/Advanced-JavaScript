
// Synchronous Callbacks:

const numbers = [1,2,3,4,5]
numbers.forEach(function(arg) {
    console.log(arg)
})
console.log('after Synchronous callback')

// Asynchronous Callbacks:

setTimeout(() => {
    numbers.forEach(arg => {
        console.log('This is an a Asynchronous call-',arg)
    })
    
},2000)
console.log('after Asynchronous callback')