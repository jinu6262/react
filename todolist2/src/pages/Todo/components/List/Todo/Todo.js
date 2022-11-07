import { useState } from "react";

function Todo({ todo, deleteTodoList, editTodoList }) {
    const [edit, setEdit] = useState(false);
    const [todoText, setTodoText] = useState(todo.todo);

    const onDeleteTodoListHandler = () => {
        deleteTodoList(todo.id);
    };

    const onEditTodoList = () => {
        if (todo.todo === todoText) return;
        editTodoList(todo.id, todoText);
        setEdit(false);
    };

    const onChangeEdit = () => {
        setEdit(true);
    };

    const onChangeTodoText = (e) => {
        setTodoText(e.target.value);
        console.log(e.target.value);
    };

    return (
        // 인라인 스타일은 객체값을 받아야되서 {} 2개
        <div style={{ display: "flex" }}>
            {todo.id}.
            {edit ? (
                <textarea value={todoText} onChange={onChangeTodoText}>
                    {todo.todo}
                </textarea>
            ) : (
                <div>{todo.todo}</div>
            )}
            <button onClick={onDeleteTodoListHandler}>삭제</button>
            {/* <button onClick={() => deleteTodoList(todo.id)}>삭제</button> */}
            <button onClick={edit ? onEditTodoList : onChangeEdit}>
                {edit ? "완료" : "수정"}
            </button>
        </div>
    );
}
export default Todo;
