import { useState } from "react";
import { useUserList } from "../context/state";

function AddState() {
    const userList = useUserList();

    const [name, setName] = useState("");
    const onChangeNameInput = (e) => {
        setName(e.target.value);
    };

    const onAddUserList = () => {
        const id = userList[userList.length - 1].id + 1;
        // setUserList([...userList, { id, name }]);
        setName("");
    };

    const onRemoveUser = (id) => {
        const newUserList = userList.filter((user) => user.id !== id);
        // setUserList(newUserList);
    };

    return (
        <>
            {userList.map((user) => (
                <div key={user.id}>
                    {user.id}.{user.name}
                    <button onClick={() => onRemoveUser(user.id)}>삭제</button>
                </div>
            ))}

            <div>
                <input value={name} onChange={onChangeNameInput} />
                <button onClick={onAddUserList}>추가</button>
            </div>
        </>
    );
}
export default AddState;
