let a = 50;
let b = 25;

function outer() {
    const obj = {
    a : 100,
    b : 200,
    fn1 : function () {
        console.log(this)
    },
    fn2 : () => {
        console.log(this)
    },
    innerobj : {
        fn3:() => {
            console.log(this)
        }
    }
}
obj.fn1()
// const exp = obj.fn1
// exp()
obj.innerobj.fn3()
}

// outer()


const user = {
  name: "Meera",
  greet() {
    setTimeout(function () {
      console.log("Hi, " + this.name); // `this` is undefined or `window`
    }, 1000);
  }
};

user.greet();



