import { useState } from "react";
import { useDispatch } from "react-redux";
import { EDIT_TODO_REQUEST, REMOVE_TODO_REQUEST } from "../../../reducer/todo";

function Todo({ todo }) {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const [text, setText] = useState(todo.todo);

    const onChangeText = (e) => {
        setText(e.target.value);
    };

    const onDeleteTodoList = (e) => {
        console.log(e);
        dispatch({
            type: REMOVE_TODO_REQUEST,
            payload: {
                id: todo.id,
            },
        });
    };

    const onClickEditBtn = () => {
        setEdit(true);
    };

    const onEditTodo = () => {
        if (todo.todo === text) {
            setEdit(false);

            return;
        }
        dispatch({
            type: EDIT_TODO_REQUEST,
            payload: {
                id: todo.id,
                todo: text,
            },
        });
        setEdit(false);
    };

    return (
        <div style={{ display: "flex" }}>
            {todo.id}.{" "}
            {edit ? (
                <textarea value={text} onChange={onChangeText}></textarea>
            ) : (
                todo.todo
            )}
            <button onClick={onDeleteTodoList}>삭제</button>
            <button onClick={edit ? onEditTodo : onClickEditBtn}>
                {edit ? "완료" : "수정"}
            </button>
        </div>
    );
}
export default Todo;
