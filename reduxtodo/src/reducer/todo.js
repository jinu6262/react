const initialState = [
    {
        id: 1,
        todo: "리덕스 공부하기",
    },
    {
        id: 2,
        todo: "리덕스 또 공부하기",
    },
];

export const ADD_TODO = "todo/ADD_TODO";
export const REMOVE_TODO = "todo/REMOVE_TODO";
export const EDIT_TODO = "todo/EDIT_TODO";

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: action.payload.id, todo: action.payload.todo },
            ];
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
