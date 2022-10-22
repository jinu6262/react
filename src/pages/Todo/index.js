// import styled from "styled-components";
import TodoTitle from "./components/Title/Title";
import TodoList from "./components/List/List";
import TodoForm from "./components/Form/Form";
import { useParams } from "react-router-dom";

function TodoPage() {
    const params = useParams(); // react-router-dom 의 기능
    // route 에 설정한 :id(변수명)을 가지고 올 수 있음
    console.log(params);
    console.log(params.todoId);

    const qurey = new URLSearchParams(window.location.search);
    // todo?dog=32&duk=10
    console.log(qurey.get("dog"));
    console.log(qurey.get("duk"));

    /*
        param
        url 값으로 전달 ( / )
        ex)
        http://localhost:3000/todo/123

        qurey
        url의 부가정보  ( ?, =, & )
        ex)
        http://localhost:3000/todo/123?dog=32&duk=10

        *백엔드 -> 서버 -> 주소가 있을 것
        ex) 프론트엔드 -> 백엔드 데이터 요청
        axios.get("www.백엔드주소.com/todo/123")
        axios.get("www.백엔드주소.com/todo?todo_id=32") *
        or
        axios.get("www.백엔드주소.com/todo, {todo_id=32}")

    */

    /*
        게시물 번호 혹은 상품번호 같은 고유번호는 param 형태로 전달
        1. 정보 보안 - 고유번호라는 것은 일방적으로 수정이 가능
            따라서 사용자가 알 이유가 없는 테이터
        

        검색이나 페이지네이션, 필터링 조건에 있어서는 qurey를 반드시 사용해야 합니다
        1. UI, UX
        사용자가 쉽게 자기가 원하는 필터를 선택 및 수정할 수 있고
        현재 자신이 보고있는 페이지 정보를 URL로 확인할 수 있다는 장점

        2. 뒤로가기
        접속했던 페이지의 주소가 남아 여러 목록이 있는 페이지에서 뒤로가기가 가능하다
    */

    return (
        // 단일 컴포넌트는 상관없지만 여러 컴포넌트를 사용하기 위해서는
        // <> 프래그먼트 - 비어있는 태그로 감싸주거나 다른 태그로 감싸줘야한다
        <>
            <TodoTitle />
            <TodoList />
            <TodoForm />
        </>
    );
}
export default TodoPage;

// css-in-js ( styled - components 사용법)

// const 컴포넌트명 = styled(styled components 라이브러리를 import한 이름).요소(태그)` ...CSS 문법 `

// const Wrapper = styled.div`
//     background-color: red;
// `;
