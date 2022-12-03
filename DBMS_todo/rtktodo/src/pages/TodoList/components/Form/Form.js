import useInput from "hooks/useInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "reducer/Todo";

function TodoForm({ todoList, setTodoList }) {
    const [todo, onChangeTodo, setTodo] = useInput("");
    const addTodoState = useSelector((state) => state.todo.addtodo);

    const dispatch = useDispatch();
    const onClickAddBtn = () => {
        dispatch(addTodos({ content: todo }));
    };

    useEffect(() => {
        if (!addTodoState.done) return;
        if (addTodoState.done) {
            setTodo("");
        }
    }, [addTodoState.done]);

    useEffect(() => {
        if (addTodoState.done) {
            if (!addTodoState.err) return;
            if (addTodoState.err) {
                alert(addTodoState.err.data);
            }
        }
    }, [addTodoState.err]);

    return (
        <>
            <input value={todo} onChange={onChangeTodo} />
            <button onClick={onClickAddBtn}>추가</button>
        </>
    );
}
export default TodoForm;
