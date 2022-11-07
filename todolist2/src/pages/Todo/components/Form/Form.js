import { useState } from "react";

function TodoForm({ todolist, setTodoList }) {
    const [todo, setTodo] = useState("");
    const onChangeTodo = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value);
    };

    const onAddTodoList = () => {
        let id;
        if (todolist.length > 0) {
            id = todolist[todolist.length - 1].id + 1;
        } else {
            id = 1;
        }
        setTodoList([...todolist, { id, todo }]);
        setTodo("");
    };

    return (
        <div>
            <input
                placeholder="할 일을 작성해주세요"
                value={todo}
                onChange={onChangeTodo}
            />
            <button onClick={onAddTodoList}>추가</button>
        </div>
    );
}
export default TodoForm;
