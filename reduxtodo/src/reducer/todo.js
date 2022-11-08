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

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: action.payload.id, todo: action.payload.todo },
            ];
        case REMOVE_TODO:
            return;
        default:
            return state;
    }
};
export default todo;
