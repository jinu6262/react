import TodoTitle from "./components/Title/Title";
import TodoList from "./components/List/List";
import TodoForm from "./components/Form/Form";
import { useState } from "react";

function TodoPage() {
    const [todolist, setTodoList] = useState([
        {
            id: 1,
            todo: "리엑트 공부하기",
        },
        {
            id: 2,
            todo: "리엑트 또 공부하기",
        },
    ]);

    /*
        react는 component 기반이기 때문에
        UI가 분리되어 제작되어있습니다. 따라서 같은 state 값을 공유해야할 필요가 있는데
        공유 할 수 있는 방법으로는 두 가지

        1. 상위 컴포넌트에서 state를 만들고 그 state와 state를 관리할 수 있는 함수들을
        props로 다른 컴포넌트에 전달

        2. 전역 변수, state를 전역화, state를 모든 컴포넌트에서 공유할 수 있도록 하는 것을
        전역 상태 관리
        ( contextAPI, useReducer, redux, modx, recoil )

    */

    return (
        <>
            <TodoTitle length={todolist.length} />
            <TodoList todolist={todolist} setTodoList={setTodoList} />
            <TodoForm todolist={todolist} setTodoList={setTodoList} />
        </>
    );
}
export default TodoPage;
