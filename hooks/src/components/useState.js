import { useState } from "react";

const UseState = () => {
    // let count = 0;
    const [count, setCount] = useState(0);
    /*
        useState는 변수를 react의 state로 관리하는 훅 함수
        state로 관리하고 있는 함수는 일반적인 방법으로 재대입(초기화)X
        오로지 set함수를 통해서만 state 값을 변경 가능

        ex)
        const [state명, set함수명] = useState(기본값)
    */

    const onAddNumber = () => {
        // count += 1;
        // console.log(count);
        setCount(count + 1);
    };

    const onSubNumber = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={onAddNumber}>+</button>
            {count}
            <button onClick={onSubNumber}>-</button>
        </div>
    );
};
export default UseState;
