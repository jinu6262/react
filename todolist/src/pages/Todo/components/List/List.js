import { media } from "../../../../styles/media";
import styled from "styled-components";

function TodoList() {
    return <Asdf>투두리스트 입니다</Asdf>;
}
export default TodoList;

const Asdf = styled.div`
    ${media.mobileL} {
        background-color: yellow;
    }
`;
