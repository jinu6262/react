import { useState, useRef } from "react";

function AddState() {
    let count = useRef(0);

    const [userList, setUserList] = useState([
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
    ]);

    /*
        백엔드에서 받아온 데이터의 형태(오브젝트)
        => 불변성을 지키고 상태를 변화
    */

    const [name, setName] = useState("");
    const onChangeNameInput = (e) => {
        console.log(e);
        setName(e.target.value);
        console.log(name);
    };

    const onAddUserList = () => {
        const id = userList[userList.length - 1].id + 1;
        //const newUserList = userList;
        //userList[userList.length] = {id, name}  // 원본을 바꾸고 있음

        // const newUserList = [...userList];
        setUserList([...userList, { id, name }]);
        // 키와 변수 이름이 같다면 {id:id, name:name} => {id, name} 축약 가능
        setName("");
    };

    const onRemoveUser = (id) => {
        const newUserList = userList.filter((user) => user.id !== id);
        setUserList(newUserList);
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

            {/* 
            객체 안에 중복 값이 없다면 index를 사용하여 key를 정해준다
            {userList.map((user, index) => (
                <div key={index}>
                    {user.id}.{user.name}
                </div>
            ))} 
            */}
            {/* 
                함수에서
                (user) => () : return 생략가능, 실행문 x
                (user) => {} : return 생략불가, 실행문 o ex) console.log
            */}
        </>
    );
}
export default AddState;
