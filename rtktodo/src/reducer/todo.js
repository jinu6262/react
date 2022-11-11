import { createSlice } from "@reduxjs/toolkit";
import { addTodos } from "../store/todo";

const initialState = {
    todos: [
        { id: 2, todo: "리엑트 또 공부" },
        { id: 1, todo: "리엑트 공부" },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.todos.unshift(action.payload);
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter(
                (item) => item.id !== action.payload.id
            );
        },
        updatetodo: (state, action) => {
            const todo = state.todos.find(
                (item) => item.id === action.payload.id
            );
            todo.todo = action.payload.todo;
        },
    },

    extraReducers: (builder) => {
        //팬딩 상태일때 ?
        builder.addCase(addTodos.pending, (state, action) => {
            /*
                loading : true;
                done: false;
                err: null
            */
        });
        // 성공했을 때?
        builder.addCase(addTodos.fulfilled, (state, action) => {
            /*
                loading : false;
                done: true;
                err: null
            */
            state.todos.unshift(action.payload);
        });
        //실패했을 때
        builder.addCase(addTodos.rejected, (state, action) => {
            /*
                loading : false;
                done: true;
                err: action.payload.err
            */
        });
    },
});

export const { addtodo, removetodo, updatetodo } = todoSlice.actions;
/* 
    일반 redux에서도 create action이라는 기능이 있으나 오히려 가 더 길어진다는 점에서
    사용하기 꺼려함

    redux toolkit 이러한 creat action의 문제를 slice.actions로 해결
    액션명이 함수 형태가 그리고 그 매개변수가 payload로 action에 전달

    ex)

    dispatch({
        type: addtodo,
        payload: 데이터
    })

    🔻

    dispatch( addtodo(액션.type) ( (액션.payload)로 전달될 데이터 ) )
    dispttch(addtodo({id,todo}))

*/
