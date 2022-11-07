/*
    state => 업데이트 할 상태를 전달 받을 것
    action => 어떤 이벤트를 일으킬건지 이벤트의 이름을 전달 받을 것
*/

// state 의 값이 바뀌었을때의 동작할 로직이 해당 컴포넌트 안에 있는 것이 아니고 내가만든 reducer에 있다
// 다른말로 로직이 밖에 있다
export const NumberReducer = function reducer(state, action) {
    //                                          ㄴnumber  ㄴdispatch
    switch (action.count) {
        //      ㄴ dispatch 안의 count 라는 이름의 키
        case "INCREMENT":
            return state + 1; // dispatch로 온 키안의 값이 INCREMENT라면 state변수의 값을 +1해준다는 뜻
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
