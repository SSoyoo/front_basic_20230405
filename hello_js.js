console.log('hellow javascript')

//한줄주석
/* 부분 주석*/

//*변수 선언 방법
//1.변수의 타입이 존재하지 않음


var variable_name;
var variable_name = '변수값';
variable_name = 10;

/*
    2.변수 선언 키워드

    var : 변수
    let :
    const :

*/

var variable_name;
if(10 == 10){
    var variable_name2 = '변수 값';
}
console.log(variable_name2);

let variable_1;


const const_variable_1 ='상수';
variable_name2 = 10;
//console.log(variable_name2.trim());

/*
    3. 데이터의 타입
*/
// 문자열 string ' ' " " 둘다 문자열로 인식, 참조변수가 아니기때문에 소문자로 표현
let stringVariable1 = '문자열';
let stringVariable2 = "문자열";

console.log(typeof(stringVariable1, stringVariable2));

// number : 정수, 실수 모두 포함
let numberVariable = 10;
let numberVariable2 = 1.5;

console.log(typeof(numberVariable, numberVariable2));

// 논리 boolean
let booleanVariable = true;
console.log(typeof(booleanVariable)); 

//null 타입
let nullVariable= null;
console.log(typeof(nullVariable));

//배열

let arrayVariable = [1,2,3,4,'글자도넣고',false,'도 넣고',2,4,5,'숫자도넣고'];
console.log(typeof(arrayVariable));
console.log(arrayVariable);
arrayVariable[0];


//객체 {}

let objectVarialble = {
    "key" :"value",
    "name" : "john",
    "age" : 20,
    "object" : {
        "key":1
    }
};

console.log(objectVarialble);

//* 연산자
// 1. 나눗셈 연산자
let number1 = 10/3;
console.log(number1);
//제곱 연산자
let number2 = 10**3;
console.log(number2);
// 비교연산 

let numberValue = 10;
let stringValue = '10';

console.log(numberValue == stringValue);
console.log(numberValue === stringValue);
console.log("----------------------------")
//* if 조건

let tempValue = null;
if(tempValue) console.log('true');
else console.log('false');

//* class //
class Human {
    name;
    age;
    address;

    constructor(name,age,address){
        this.name = name; 
        this.age = age;
        this.address = address;
    }

}

let humanObject = new Human('이름',30,'주소');
console.log(humanObject.name);
//* 비구조화할당 
//const { name, age, address } = humanObject; 
let {name, ...others } = humanObject;
console.log(name);
console.log(others);

name ='michle';
humanObject = {...humanObject,name};
console.log(humanObject);

 

const tempArray = [1,'A',true];
const [number,...otherArray] = tempArray;
console.log(number);
console.log(otherArray);

//*함수

function function1(arg1 ,arg2){

};
function1(1,2);

const function2 = (arg1 ,arg2) => {

};

function2(1,2);
