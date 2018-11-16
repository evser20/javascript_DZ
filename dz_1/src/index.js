function returnRequest(y) {
    return y;
}
returnRequest(10);

function sum(a, b) {
    var result;

    result = a + b;

    return result;
}
sum(120, 3);

function sumWithDefault(a) {
    var res;

    res = a + 100;

    return res;
}
sumWithDefault(566);

var returnFnResult = (fn) => fn();

returnFnResult(() => 'Привет, Андрей!!!');

function returnCounter(x) {

    return function() {
        return ++x;
    };
}
var f;

f = returnCounter(10);

console.log(f());
console.log(f());
console.log(f());

function returnArgumentsArray() {
    var args;

    args = [].slice.call(arguments);

    return args;
}
returnArgumentsArray(1, 2, 3);

function nsum(a, b) {
    return a + b;
}

function bindFunction(func) {
    var arg = [];

    for (var i = 1; i < arguments.length; i++) {
        arg.push(arguments[i]);
    }

    return function() {
        return func.apply(null, arg);
    }
}
var newSum = bindFunction(nsum, 2, 6);

newSum();
export {
    bindFunction,
    nsum,
    returnArgumentsArray,
    returnCounter,
    returnFnResult,
    sumWithDefault,
    sum,
    returnRequest
}