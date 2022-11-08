import { REMOVE_STATE, useUserListDispatch } from "../context/state";

function AddList({ user }) {
    const userListDispatch = useUserListDispatch();

    console.log("test" + user);
    const onRemoveUser = () => {
        // const newUserList = userList.filter((user) => user.id !== id);
        // setUserList(newUserList);
        console.log();
        userListDispatch({
            type: REMOVE_STATE,
            id: user.id,
            // payload : {
            //     id: user.id
            // }
        });
    };

    return (
        <>
            <div>
                {user.id}. {user.name}
                <button onClick={onRemoveUser}>삭제</button>
            </div>
        </>
    );
}
export default AddList;
