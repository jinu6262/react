import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO } from "../../reducer/todo";
import Todo from "./Todo/Todo";

function TodoPage() {
    const todoList = useSelector((state) => state.todo);
    //store에 저장되어 있는 todo라는 reducer를 가져온것
    // console.log(todoList);

    const dispatch = useDispatch();

    const [todo, setTodo] = useState("");
    const onChangeTodoInput = (e) => {
        setTodo(e.target.value);
    };

    const onAddTodoList = () => {
        let lastId;
        if (todoList.length > 0) {
            lastId = todoList[todoList.length - 1].id;
        } else {
            lastId = 0;
        }
        dispatch({
            type: ADD_TODO,
            payload: {
                id: lastId + 1,
                todo: todo,
            },
        });
        setTodo("");
    };

    return (
        <>
            <div>
                {todoList.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <Todo todo={todo} />
                        </div>
                    );
                })}
                <input value={todo} onChange={onChangeTodoInput} />
                <button onClick={onAddTodoList}>추가</button>
            </div>
        </>
    );
}
export default TodoPage;
//어떤 컴포넌트에서든 useSelector 를 이용하여 reducer에 있는 todo state를 가져올수 있다
