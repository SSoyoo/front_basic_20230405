console.log('hello typescript');
//*  변수

let number : number;
number = 10;
//number = 'string';

let string : 'STRING';
//string = 10;


//*함수

const function1 = (arg : number):string =>{
    return '반환';
}

//* 객체에대한 타입
// 1. class 이용
class Object1 {
    prop1: string;
    prop2 : number;

    constructor(prop1: string, prop2 :number){
        this.prop1 =prop1;
        this.prop2 =prop2;

    }
}

const object1 : Object1 = { prop1: '프로프1',prop2:2};


//type 키워드 사용

type Object2 = {
    prop1 : string,
    prop2 : number
}

const object2 : Object2 = { prop1:'프로프1', prop2:2}


//인터페이스 활용

interface Object3 {
    prop1: string;
    prop2: number;

    func1?:(arg1:number) => string;
};

const object3 : Object3 |null = null;

interface Object4 {
    prop3: string;
    prop4: number;
}
const object4 : Object3 & Object4 = {
    prop1:'프로프1', prop2:2, prop3:'프로프3', prop4:4};