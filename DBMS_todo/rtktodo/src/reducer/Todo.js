import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoApi } from "apis/todoApi";
import { reducerUtils } from "utils/reducerUtils";

export const addTodos = createAsyncThunk("todo/addTodo", async (todo) => {
    try {
        const response = await TodoApi.createTodo(todo);
        return response.data.data;
    } catch (err) {
        return err;
    }
});

const initialState = {
    todos: [],
    addtodo: {
        loading: false,
        deon: false,
        err: null,
    },
    gettodos: {
        loading: false,
        done: false,
        err: null,
    },
};

export const getTodos = createAsyncThunk("todo/getTodo", async () => {
    try {
        const response = await TodoApi.getTodos();
        return response.data.data;
    } catch (err) {
        return err;
    }
});

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addTodos.pending, (state) => {
            reducerUtils.loading(state.addtodo);
        });

        builder.addCase(addTodos.fulfilled, (state, action) => {
            reducerUtils.success(state.addtodo);
            state.todos.unshift(action.payload);
        });

        builder.addCase(addTodos.rejected, (state, action) => {
            reducerUtils.error(state.addtodo, action.payload);
        });

        //get
        builder.addCase(getTodos.pending, (state) => {
            reducerUtils.loading(state.gettodos);
        });

        builder.addCase(getTodos.fulfilled, (state, action) => {
            reducerUtils.success(state.gettodos);

            state.todos = action.payload;
        });

        builder.addCase(getTodos.rejected, (state, action) => {
            reducerUtils.error(state.gettodos, action.payload);
        });
    },
});

export const { addtodo, removetodo, updatetodo } = todoSlice.actions;
