import { useReducer } from "react";
import { NumberReducer } from "../reducer/rootreducer";

function UseReducer() {
    const [number, dispatch] = useReducer(NumberReducer, 0);
    //      ㄴ값,state   ㄴ전달장치                ㄴ값을 전달해준 내가만든 리듀서 / 0은 값의 기본값

    /*
        const [state명, dispatch] = useReducer(reducer명, state의 기본 값)

        *dispatch (이벤트리스너, 비둘기)
        component - reducer 연결해주고 값을 전달하는 매개채
    */

    const onIncrement = () => {
        dispatch({
            count: "INCREMENT",
        }); // count 라는 키 이름으로 "INCREMENT"라는 값을 dispatch를 이용해서 reducer에 전달해준다는 뜻
    };

    const onDecrement = () => {
        dispatch({
            count: "DECREMENT",
        });
    };
    // dispatch안에 담긴 내용이 action으로 내가 만든 reducer에 전달된다

    return (
        <div>
            <button onClick={onIncrement}>+</button>
            {number}
            <button onClick={onDecrement}>-</button>
        </div>
    );
}
export default UseReducer;
