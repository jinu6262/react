import { TodoApi } from "apis/todoApi";

import useInput from "hooks/useInput";
import { useState } from "react";

import styled from "styled-components";

function Todo({ todo, todoList, setTodoList }) {
    const [edit, setEdit] = useState(false);
    const [newTodo, onChangeNewTodo] = useInput(todo.content);

    const onChnageEdit = () => {
        setEdit(true);
    };

    const onDeleteTodo = () => {
        TodoApi.deleteTodo(todo.id)
            .then((res) => {
                if (res.status === 200) {
                    const todoList_d = todoList.filter(
                        (todo) => todo.id !== res.data.data
                    );
                    setTodoList(todoList_d);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const onUpdateTodo = () => {
        if (todo.content === newTodo) return setEdit(false);

        const data = {
            content: newTodo,
            flag: todo.flag,
        };

        TodoApi.updateTodo(todo.id, data)
            .then((res) => {
                if (res.status === 200) {
                    const { data } = res.data;
                    console.log(data);
                    const newTodoList = [...todoList];
                    let todo = newTodoList.find((todo) => todo.id === data.id);
                    todo.content = data.content;
                    setTodoList(newTodoList);
                    setEdit(false);
                }
            })
            .catch((err) => console.error(err));
    };

    const onUpdateFlag = () => {
        const data = {
            content: todo.content,
            flag: !todo.flag,
        };

        TodoApi.updateTodo(todo.id, data)
            .then((res) => {
                if (res.status === 200) {
                    const { data } = res.data;
                    const newTodoList = [...todoList];
                    let todo = newTodoList.find((todo) => todo.id === data.id);
                    todo.flag = data.flag;
                    setTodoList(newTodoList);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <S.Wrapper>
            <div onClick={onUpdateFlag}>{todo.flag ? "완료" : "미완료"}</div>
            <div>
                {edit ? (
                    <textarea
                        value={newTodo}
                        onChange={onChangeNewTodo}
                    ></textarea>
                ) : (
                    todo.content
                )}
            </div>
            <button onClick={onDeleteTodo}>삭제</button>
            {edit ? (
                <button onClick={onUpdateTodo}>완료</button>
            ) : (
                <button onClick={onChnageEdit}>수정</button>
            )}
        </S.Wrapper>
    );
}
export default Todo;

const Wrapper = styled.div`
    display: flex;
    margin: 8px 0;
`;

const S = {
    Wrapper,
};
