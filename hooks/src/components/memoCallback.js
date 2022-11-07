import { useState, useMemo, useCallback } from "react";

function UseMemoCallback() {
    const [color, setColor] = useState("red");
    const [memo, setMemo] = useState(true);

    const text = useMemo(() => {
        //즉시 실행 함수
        console.log("안녕하세요"); // 함수가 실행되었나 확인용
        if (memo) {
            return "useMemo 입니다";
        }
        return "useCallback 입니다";
    }, [memo]); //useMemo는 의존성 배열이 바뀌어야만 실행
    // 함수에서 의존성 배열의 값이 바뀌지 않으면 이전 사용된 useMemo()의 리턴 값을 재사용
    // 의존성 배열의 값이 바뀌면 useMemo()를 재연산을 함

    // const onChangeText = () => {
    //     // setColor("blue");
    //     setMemo((prev) => !prev);
    //     console.log(memo);
    // };

    //이건 사실 별로 불필요(도우미 용)
    // const onChangeTextColor = () => {
    //     setColor("blue");
    //     // setMemo((prev) => !prev);
    //     console.log(color);
    // };

    const onChangeText = useCallback(() => {
        if (memo) {
            return setMemo(false);
        }
        return setMemo(true);
    }, [memo]);

    // useCallback은 연산의 문제가 아닌 선언의 문제, 함수 저장소
    // memo와의 차이점은 memo는 연산 후 값이 저장
    // callback은 함수를 저장하는 것이기 때문에 해당 함수를 사용해야만 한다

    // memo가 true인 상태로 스코프에 등록 그리고 해당 값을 유지함(재선언하지 않고)
    // 따라서 memo에 의하여 함수 기능이 변경되는 경우에는 의존성 배열에 값을 추가

    /* 
    useMemo(() => {} ,[]) <-- 의존성 배열
    
    []를 의존성 배열이라고 부르는데 이 내부의 변수 혹은 상수의 값이 바뀌어야만
    해당 함수를 다시 연산, 그 외의 경우에는 연산하지 않음 [기존 값 유지]
    
    */

    return (
        <>
            <div>{text}</div>
            <button onClick={onChangeText}>텍스트 변경</button>
            {/* <button onClick={onChangeTextColor}>텍스트 컬러 변경</button> */}
        </>
    );
}
export default UseMemoCallback;
