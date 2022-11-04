import { useEffect, useState } from "react";

function UseEffect() {
    /*
        useEffect
            페이지의 생명주기
    
            [마운트]                               [언마운트]
            페이지가 처음 사용자 화면에 보였을 때 -> 페이지가 사용자 화면에 사라졌을 때
            위 두 경우를 포함한

            이 사이에서 발생하는 모든 이벤트를 책임
            state가 변화 했을 때 연쇄 이벤트

            사용법

            useEffect(함수, [의존성배열])
            * 의존성 배열의 값이 바뀔 때 실행 할 함수
    */

    const [state, setState] = useState(false);

    useEffect(() => {
        console.log("useEffect의 위쪽 안녕하세요");
    }, [state]);
    // 의존성 배열이 없기 때문에 페이지가 처음 보였을 때 단 한번만 실행
    // 그럼 만약에 내가 state가 변경되었을 때 마다 안녕하세요를 콘솔에 찍어주고 싶다면?
    // 그때는, 의존성 배열에 state를 넣어주면 되겠군

    // 그럼 useEffect 언제 사용하는가
    // 1. 페이지 열렸을 때 백엔드와 데이터 통신
    // 2. ex)
    /*
        const [prodList, setProdList] = useState()

        await axios.get(`/prod?id${prodId}`).then((res) => {
            //res => 백엔드에서 보내준 데이터 값 
            //       (상품정보, 회원정보, 게시글, 리뷰 ... 리스트) - state가 아니다
            //       우리가 state화 시켜주어야 된다

            setProdList(prodList); 
            //useState의 set함수는 비동기 - 같은 함수내에서 사용하면 바뀐값을 인식못함
            // useStat가 변화한 후 사용하기 위해서는 useEffect([의존성배열])을 활용

            // set함수에 이어서 같은 범위 내에 state함수를 사용하면
            // state가 바뀌기 전의 형태가 사용됨
            // 따라서 바뀐 state 값을 활용하기 위해서는 useEffect[의존성 배열]을 활용

        }).catcher((err)=> {

        })

        useEffect(()=>{
            if(!prodList) return;
            .. 백엔드에서 받아온 데이터를 가공해야하거나
            .. state의 값이 변화 되었을 때 실행해줄 이벤트
            .. state가 바뀌었을 때 연쇄 이벤트를 발생 시켜줄수 있다
        },[prodList])
        // prodList가 바뀌었으니 실행해, prodList가 안바뀌면 실행 안해줌

        // set함수는 비동기, 따라서 이후 동기 처리를 위해 Effect 사용
    */

    const onChangeState = () => {
        setState((prev) => !prev);
    };

    const [state2, setState2] = useState(null);
    const [state3, setState3] = useState(null);
    const [state4, setState4] = useState(null);

    useEffect(() => {
        if (!state) return;
        console.log("useEffect의 안녕하세요");
        setState2((prev) => prev + 1);
    }, [state]);

    useEffect(() => {
        if (!state2) return;
        console.log("useEffect의 안녕하세요2");
        setState3((prev) => prev + 1);
    }, [state2]);

    useEffect(() => {
        if (!state3) return;
        console.log("useEffect의 안녕하세요3");
        setState4((prev) => prev + 1);
    }, [state3]);

    useEffect(() => {
        if (!state4) return;
        console.log("useEffect의 안녕하세요4");
    }, [state4]);

    return (
        <div>
            {state ? "true 입니다" : "false 입니다"}
            <button onClick={onChangeState}>변경</button>
        </div>
    );
}
export default UseEffect;
