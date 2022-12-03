import { useState } from "react";
// 매개변수로 initalvalue를 받고
// 만약 전달받은 매개변수가 없다면 기본값을 null로 한다

const useInput = (initalvalue = null) => {
    const [value, setValue] = useState(initalvalue);
    const onChange = (e) => {
        setValue(e.target.value);
        //이벤트 객체의 타겟이 바뀌면 state를 변경
    };
    return [value, onChange, setValue];
    //중괄호 사용하여 객체로 리턴해도 됨
};
export default useInput;
