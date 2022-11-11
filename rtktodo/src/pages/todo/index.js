import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo } from "../../reducer/todo";

import Todo from "./Todo/Todo";

function TodoPage() {
    const { todos } = useSelector((state) => state.todo);
    //store에 저장되어 있는 todo라는 reducer를 가져온것
    // console.log(todoList);

    const dispatch = useDispatch();

    const [todo, setTodo] = useState("");
    const onChangeTodoInput = (e) => {
        setTodo(e.target.value);
    };

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
