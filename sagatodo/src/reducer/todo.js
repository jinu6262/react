import produce from "immer";

const initialState = {
    todos: [
        {
            id: 2,
            todo: "리덕스 또 공부하기",
        },
        {
            id: 1,
            todo: "리덕스 공부하기",
        },
    ],
    // addtodoLoading: false,
    // addtodoSuccess: false,
    // addtodoError: null,
    addtodo: {
        loading: false,
        done: false,
        error: null,
    },
};

export const ADD_TODO = "todo/ADD_TODO";
export const ADD_TODO_REQUEST = "todo/ADD_TODO_REQUEST";
export const ADD_TODO_SCUCESS = "todo/ADD_TODO_SCUCESS";
export const ADD_TODO_FAILURE = "todo/ADD_TODO_FAILURE";

export const REMOVE_TODO = "todo/REMOVE_TODO";
export const EDIT_TODO = "todo/EDIT_TODO";

const todo = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_TODO_REQUEST:
                /*
                    loading : true //요청 중
                    done : false   //요청 중이라 값은 못받음(실행이 안 끝남)
                    failure : null //받은 값이 없어 에러도 없음
                */
                draft.addtodo.loading = true;
                draft.addtodo.done = false;
                draft.addtodo.error = null;
                break;
            case ADD_TODO_SCUCESS:
                /*
                    loading : false //요청이 끝남
                    done : true     //값을 받는데 성공(실행이 끝남)
                    failure : null  //성공 하여 에러는 없음
                */
                draft.addtodo.loading = false;
                draft.addtodo.done = true;
                draft.addtodo.error = null;

                draft.todos.unshift({
                    id: action.payload.id,
                    todo: action.payload.todo,
                });
                break;
            case ADD_TODO_FAILURE:
                /*
                    loading : false //요청이 끝남
                    done : true     //실패하여 값은 못받음 (실행이 끝남)
                    failure : action.payload.err //실패하여 에러값이 채워짐
                */
                draft.addtodo.loading = false;
                draft.addtodo.done = true;
                draft.addtodo.error = action.payload.error;
                break;
            case REMOVE_TODO:
                draft.todos = draft.todos.filter(
                    (item) => item.id !== action.payload.id
                );
                break;
            case EDIT_TODO:
                const todo = draft.todos.find(
                    (item) => item.id === action.payload.id
                );
                todo.todo = action.payload.todo;
                break;
            default:
                return state;
        }
    });
};
export default todo;
