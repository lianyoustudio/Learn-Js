'use strict';

// console.log('hello world');

var s = 'Hello';

function greet(name) {
    console.log(s + ',' + name);
}

function hello(name){
    console.log('Hello, ' + name)
}

function hi(name){
    console.log('Hi, ' + name)
}

// module.exports = greet;
module.exports.hello = hello;
module.exports.hi = hi;