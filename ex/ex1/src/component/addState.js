import { useState } from "react";
import { useUserListState } from "../context/state";
import AddForm from "./addForm";
import AddList from "./addList";

function AddState() {
    const userList = useUserListState();
    console.log(userList);

    return (
        <>
            {userList.length > 0 &&
                userList.map((user) => <AddList key={user.id} user={user} />)}
            {/* {userList.map((user) => (
                <AddList key={user.id} user={user} />
            ))} */}

            <AddForm />
            {/* lastId={userList[userList.length - 1].id} */}
        </>
    );
}
export default AddState;
