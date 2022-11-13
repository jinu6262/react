import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo } from "../../reducer/todo";

import Todo from "./Todo/Todo";

function TodoPage() {
    const { todos } = useSelector((state) => state.todo);
    //store에 저장되어 있는 todo라는 reducer를 가져온것
    // console.log(todoList);

    const dispatch = useDispatch();

    //input의 value를 state에 저장
    // const [todo, setTodo] = useState("");
    // const onChangeTodoInput = (e) => {
    //     setTodo(e.target.value);
    // };
    const [todo, onChangeTodoInput, setTodo] = useInput("");
    // const [userId, onChangeUserId] = useInput("");

    //판을 만들고 찍어내는 것, 모듈화 및 컴포넌트화

    // 커스텀 훅은 = 재사용성, 코드를 줄이기위해 사용도 하지만
    // 뷰에서 로직을 숨기기 위해서도 사용한다

    /*
        회원가입페이지에 이런 input이 최소 5개 이상
        그러면 모든 input마다 이함수를 만들어주어야 하는가

        중복성 코드를 줄이고, 자동화 => 개발자

        단일책임원칙을 지킬 수 있음
        하나의 모듈은 하나의 기능만 해야한다
        훅함수화 시킴으로서 모듈화가 되고, 해당 모듈은 하나의 기능을 수행
        뷰에서 로직도 숨김
    */

    const onAddTodoList = () => {
        let lastId;
        if (todos.length > 0) {
            lastId = todos[0].id;
        } else {
            lastId = 0;
        }

        const data = {
            id: lastId + 1,
            todo,
        };

        dispatch(addtodo(data));
        // dispatch(addtodo({ id: lastId + 1, todo }));
        setTodo("");
    };

    return (
        <>
            <div>
                <input value={todo} onChange={onChangeTodoInput} />
                <button onClick={onAddTodoList}>추가</button>
                {todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <Todo todo={todo} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default TodoPage;
//어떤 컴포넌트에서든 useSelector 를 이용하여 reducer에 있는 todo state를 가져올수 있다
