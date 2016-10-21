Function.prototype.uncurrying=function(){
    var self=this;
    return function(){
        var obj=Array.prototype.shift.call(arguments);
        return self.apply(obj,arguments)
    }
};

var push=Array.prototype.push.uncurrying();
var obj={
    'length':1,
    "0":1
}

push(obj,2)
console.log(obj);