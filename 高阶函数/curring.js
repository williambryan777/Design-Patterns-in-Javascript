var currying = function (fn) {
    var args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    }
};

var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            money += arguments[i];
        }

        return money;
    }
})();


var const1 = currying(cost);
const1(100);//还没有开始真正求值
const1(200);//还没有开始真正求值
const1(300);//还没有开始真正求值

console.log(const1());