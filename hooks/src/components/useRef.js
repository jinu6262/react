import { useRef, useState } from "react";

function UseRef() {
    const ref = useRef(null);
    let count1 = 0;
    let count2 = useRef(0);
    const [state, setState] = useState(false); //다시 랜더링 하기 용

    /*
        js에서 DOM SELECTER 와 같이 DOM에 접근할 수 있게 하는 훅 함수
        페이지가 새로 랜더링 되는 것과 상관 없이 값을 유지 시키는 변수/상수
    */

    const onChnageColor = () => {
        console.log(ref.current);
        count1 += 1;
        console.log(`일반 변수 - ${count1}`);
        count2.current += 1;
        console.log(`useRef 변수 - ${count2.current}`);
        ref.current.style.color = "red";
    };

    const onAddCount = () => {
        // setState(!state);
        setState((prev) => !prev);
        // prev => 반환값(return) = 기존의 state 값
        // !prev = prev의 반대값
        // prev = true -------> !prev = false
        // prev = false ------> !prev = true
    };

    return (
        <>
            <div ref={ref}>UseRef</div>
            <button onClick={onChnageColor}>색상 변경/카운트 증가</button>
            <button onClick={onAddCount}>다시 랜더링</button>
        </>
    );
}
export default UseRef;
