const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function fn() {
        console.log("This is a named function")
    }
}

function returnsAnAnonymousFunction() {
    return() => console.log("This is an anonymous function")
}