console.log('hello typescript');
//*  변수
var number;
number = 10;
//number = 'string';
var string;
//string = 10;
//*함수
var function1 = function (arg) {
    return '반환';
};
//* 객체에대한 타입
// 1. class 이용
var Object1 = /** @class */ (function () {
    function Object1(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    return Object1;
}());
var object1 = { prop1: '프로프1', prop2: 2 };
var object2 = { prop1: '프로프1', prop2: 2 };
;
var object3 = null;
var object4 = {
    prop1: '프로프1', prop2: 2, prop3: '프로프3', prop4: 4
};
//4. enum
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "\uC0AC\uACFC";
    Fruits["BANANA"] = "\uBC14\uB098\uB098";
    Fruits["MELON"] = "\uBA54\uB860";
})(Fruits || (Fruits = {}));
var fruits = Fruits.APPLE;
