import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "reducer/Todo";
import TodoForm from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

function TodoListpage() {
    const todoList = useSelector((state) => state.todo.todos);
    const getTodoState = useSelector((state) => state.todo.gettodos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    // react18의 Suspense, lazy loading으로 대체 가능
    if (getTodoState.loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {todoList.map((todo) => (
                <Todo key={todo.id} todo={todo} todoList={todoList} />
            ))}
            <TodoForm todoList={todoList} />
        </>
    );
}
export default TodoListpage;
