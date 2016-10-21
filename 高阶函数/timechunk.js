/**分时函数 */
var timeChunk = function (arr, fn, count) {
    var obj, t;
    var start = function () {
        for (var i = 0; i < Math.min(count || 1, arr.length); i++) {
            var obj = arr.shift();
            fn(obj);
        }
    }
    return function () {
        t = setInterval(function () {
            if (arr.length == 0) {
                return clearInterval(t);
            }
            start();
        }, 200);
    }
}


var arr = [];
for (var i = 0; i <= 1000; i++) {
    arr.push(i)
}

var renderList = timeChunk(arr, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 8);

renderList();