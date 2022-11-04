import styled from "styled-components";
import { flexCenter, title } from "../../../../styles/common";
import { media } from "../../../../styles/media";

function TodoTitle({ length }) {
    // 상위 컴포넌트에서 하위 컴포넌트로 어떠한 값이나 함수를 속성으로 전달하면(lengt속성)
    // 객체 형태의 매개변수로 전달된다

    console.log(length);
    /*
        props = {
            length : 2
        }
     */

    return (
        <Wrapper>
            투두리스트 타이틀입니다
            <p>
                남은 할일<span>{length}</span>개
            </p>
        </Wrapper>
    );
}
export default TodoTitle;

const Wrapper = styled.div`
    ${flexCenter}
    ${title}

    background-color: ${(props) => props.theme.palette.primary[200]};

    font-size: ${({ theme }) => theme.fontSize.xLarge};

    & > p {
        color: red;
        line-height: 48px;

        & > span {
            display: inline-block;
            text-align: center;

            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: aqua;
        }
    }

    ${media.tablet} {
        background-color: yellow;
    }
`;
