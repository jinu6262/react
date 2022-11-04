// class 형 컴포넌트

// import { render } from "@testing-library/react";

//     class 라고 하는 것은 react 초창기 때 만들어진 사용방법
//     state(리엑트의 상태) => this.state

//     하지만 리엑트 공식홈페이지에서 말하기를 숙련된 리엑트 사용자라 하더라도
//     클래스 형 컴포넌트를 이용하는 것은 쉬운 일이 아니라고 판단하여

//     함수형 컴포넌트로 버전을 업데이트
//     -- 즉 class형은 더이상 사용하지 않는 이전의 유물

// 함수형 컴포넌트

// 기본형

// function 컴포넌트명 (props.. 매개변수(전달받은 변수)) {

//      // 변수라던지 함수라던지 기능을 선언
//      let a = 5;

//      return (---------- 랜더링 함수 render() ---> 함수형으로 들어오면서 바뀜)
//          <div></div>
//      )
// }
// export default 컴포넌트명

// 함수형으로 넘어오면서 this.state와 같은 상태관리(라이프 사이클) 함수가
// hook함수라는 것은 변동 [다음주에 배울 내용]

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import SigninPage from "../pages/Signin";
import TodoPage from "../pages/Todo";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={"/sigun-up"} element={컴포넌트}/> */}
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/sign-in"} element={<SigninPage />} />

                <Route path={"/todo"} element={<TodoPage />} />
                <Route path={"/todo/:todoId"} element={<TodoPage />} />
                {/* 
                    param : /
                    qurey : ?, =, &
                */}
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;

/*
const Routing = () => {
    return <div></div>;
}
export default Routing;

컴포넌트 랜더함수 => function
컴포넌트 내부에서쓰는 기능을 정의하는 일반함수는 화살표 함수
*/
