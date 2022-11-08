import { useState } from "react";
import {
    ADD_STATE,
    useUserListDispatch,
    useUserListState,
} from "../context/state";

function AddForm() {
    // { lastId }
    /* 
        깊이가 깊지 않기 때문에 lastID를 props로 받는게 효율적이나
        깊다는 가정 하에 전역으로 불러와서 사용
    */

    const userList = useUserListState();
    const userListDispatch = useUserListDispatch();

    const [name, setName] = useState("");
    const onChangeNameInput = (e) => {
        setName(e.target.value);
    };

    const onAddUserList = () => {
        console.log(userList.length);
        let id = null;
        if (userList.length >= 1) {
            id = userList[userList.length - 1].id + 1;
        } else {
            id = 1;
        }

        userListDispatch({
            type: ADD_STATE,
            payload: {
                id, //id : id
                name, // name : name
            },
        });

        setName("");
    };

    return (
        <div>
            <input value={name} onChange={onChangeNameInput} />
            <button onClick={onAddUserList}>추가</button>
        </div>
    );
}
export default AddForm;
