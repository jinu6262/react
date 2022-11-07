import { createContext, useContext } from "react";

const initialState = [
    {
        id: 1,
        name: " 김성용",
    },
    {
        id: 2,
        name: " 김사과",
    },
    {
        id: 3,
        name: " 이멜론",
    },
];

const Context = createContext(); //전역상태를 관리할 저장소를 만든다는 명령어, import해야됨
export const useUserList = () => useContext(Context);
//만든 저장소(Context)를 사용하겠다는 뜻 import해야됨,----- 함수화 시켜야됨

export const ADD_STATE = "ADD_STATE";
export const REMOVE_STATE = "REMOVE_STATE";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_STATE:
            return [...state, { id: action.id, name: action.name }];
        case REMOVE_STATE:
            return state.filter((list) => list.id !== action.id);
        default:
            return;
    }
};

const ContextProvider = ({ children }) => {
    // ContextProvider 태그가 감싸고 있는 값이 children 이 된다
    // children = 현재 ContextProvider 가 감싸주고 있는 하위 컴포넌트
    return (
        <>
            <Context.Provider value={initialState}>
                {/* ontext.Provider 의 역할은  value를 children에게 전달해주는 역할 */}
                {/* 내가만든 전역상태 값(initialState)을 children에게 전달하고있음 */}
                {children}
            </Context.Provider>
        </>
    );
};
export default ContextProvider;
