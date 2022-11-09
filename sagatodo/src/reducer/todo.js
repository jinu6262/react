const initialState =
    // todo:
    [
        {
            id: 1,
            todo: "리덕스 공부하기",
        },
        {
            id: 2,
            todo: "리덕스 또 공부하기",
        },
    ];
// addtodoLoading: false,
// addtodoSuccess: false,
// addtodoError: null,
// addtodo: {
//     Loading: false,
//     Done: false,
//     Error: null,
// },
// };

export const ADD_TODO = "todo/ADD_TODO";
export const ADD_TODO_LOADING = "todo/ADD_TODO_LOADING";
export const ADD_TODO_SCUCESS = "todo/ADD_TODO_SCUCESS";
export const ADD_TODO_REMOVE = "todo/ADD_TODO_REMOVE";

export const REMOVE_TODO = "todo/REMOVE_TODO";
export const EDIT_TODO = "todo/EDIT_TODO";

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_LOADING:
            state.addtodo.Loading = true;
            state.addtodo.Done = false;
            state.addtodo.Error = null;
            return state;
        case ADD_TODO_SCUCESS:
            state.addtodo.Loading = false;
            state.addtodo.Done = false;
            state.addtodo.Error = null;
            return state;
        case ADD_TODO_REMOVE:
            state.addtodo.Loading = true;
            state.addtodo.Done = false;
            state.addtodo.Error = null;
            return state;
        // [
        //     ...state,
        //     { id: action.payload.id, todo: action.payload.todo },
        // ];
        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.payload.id);
        case EDIT_TODO:
            const todo = state.find((item) => item.id === action.payload.id);
            todo.todo = action.payload.todo;
            return state;
        default:
            return state;
    }
};
export default todo;
