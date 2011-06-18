var Nothing = (function() {

    /** bind :: this Maybe a -> (a -> Maybe b) -> Maybe b */
    var bind = function(_) {
        return Nothing;
    };

    /** toString :: this Maybe a -> String */
    var toString = function() {
       return "Nothing";
    };

    return {
        ">>=": bind,
        toString: toString
    };
})();

var Just = (function() {

    return function(a) {
        /** bind :: this Maybe a -> (a -> Maybe b) -> Maybe b */
        var bind = function(f) {
            return f(a);
        };

        var toString = function() {
            return "Just " + a;
        };

        return {
            ">>=": bind,
            toString: toString
        };
    };
})();


var y = Just(3);

var f = function(x) {
    return x > 3 ? Just(x + 1) : Nothing;
}

function g(y) {
    return (y) [">>="] (f) [">>="] (f);
}


