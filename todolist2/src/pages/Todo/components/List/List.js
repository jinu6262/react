import Todo from "./Todo/Todo";

function TodoList({ todolist, setTodoList }) {
    const deleteTodoList = (id) => {
        const newTodoList = todolist.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    };

    const editTodoList = (id, todo) => {
        const newTodoList = [...todolist];
        const selectTodo = newTodoList.find((todo) => todo.id === id);
        selectTodo.todo = todo;
        setTodoList(newTodoList);
    };

    return (
        <>
            <div>투두리스트 입니다</div>
            {todolist.map((todo) => {
                return (
                    <Todo
                        todo={todo}
                        deleteTodoList={deleteTodoList}
                        editTodoList={editTodoList}
                    />
                );
                // <div key={list.id}>
                //     {list.id}. {list.todo}
                //     <button onClick={() => onRemoveList(list.id)}>삭제</button>
                // </div>
            })}
        </>
    );
}
export default TodoList;
// 추가 조회 삭제
