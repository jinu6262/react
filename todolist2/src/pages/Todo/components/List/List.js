import Todo from "../Todo/Todo";

function TodoList({ todolist, setTodoList }) {
    const onRemoveList = (id) => {
        const newTodoList = todolist.filter((list) => list.id !== id);
        setTodoList(newTodoList);
    };

    return (
        <>
            <div>투두리스트 입니다</div>
            {todolist.map((todo) => {
                return <Todo todo={todo} />;
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
