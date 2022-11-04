import { useState } from "react";

function Todo({ todo, onChangTodo }) {
    const [edit, setEdit] = useState(false);

    return (
        <div>
            {todo.id}.
            {edit ? <textarea>{todo}</textarea> : <div>{todo.todo}</div>}
        </div>
    );
}
export default Todo;
