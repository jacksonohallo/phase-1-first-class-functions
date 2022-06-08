function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    
    return function namedFunction() {
    
        console.log("this is the so called named function")
    };
}

function returnsAnAnonymousFunction() {
    
    return () => console.log("anonymus function")
}