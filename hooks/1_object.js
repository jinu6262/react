const students = {
    apple: "봉지원님",
    banana: "김현태님",
    orange: "이유진님",
};

const { apple, banana, orange } = students;

console.log(apple); //봉지원님
console.log(banana); //김현태님
console.log(orange); //이유진님

//node 1_object.js 터미널에서 js 파일 실행시 명령어

const user = ["이경주님", "이종호님", "박우현님"];

const [lee, jong, park] = user;

console.log(lee); //이경주님
console.log(jong); //이종호님
console.log(park); //박우현님

const dog = {
    name: "콩이",
    age: 10,
    weight: 5,
};
console.log(`-------------------`);
// const printDesDog = (dog) => {
//     console.log(`우리집 강아지의 이름은 ${dog.name}입니다.
//     그리고 나이는 ${dog.age}살이 구요. 무게는 ${dog.weight}kg 입니다`);
// };

const printDesDog = ({ name, age, weight }) => {
    console.log(`우리집 강아지의 이름은 ${name}입니다. 
    그리고 나이는 ${age}살이 구요. 무게는 ${weight}kg 입니다`);
};

// printDesDog(dog);

//1. 매개변수도 구조분해할당으로 접근할 수 있다
printDesDog(dog);
console.log(`-------------------`);
//2.
printDesDog({
    name: dog.name,
    age: dog.age,
    weight: dog.weight,
});

function a(key, value) {
    console.log(key, value);
}

function b({ key, value }) {
    console.log(key, value);
}

function c(name, { key, value }) {
    console.log(name, key, value);
}

const onClickHandler = (e) => {
    // e.target <-- 이벤트가 일어난 객체의 타겟
    const { target } = e; // o
};

// a("token_key", 1234) <-- 매개변수가 어떤 기능을 한느 지알 수 있나요?

/* 
    b({
        key: "token_key"
        value: 1234
    })
*/

/* 
    c("soengyong", {
        key: "string"
        value: "123"
    })

    const key = {key: "string", value: "123"}
    c("seognyong", key) --> 문서화
*/
