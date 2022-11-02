// import styled from "styled-components";

import styled from "styled-components";
import { flexCenter, title } from "../../../../styles/common";
import { media } from "../../../../styles/media";

function TodoTitle() {
    return (
        <Wrapper>
            투두리스트 타이틀입니다
            <p>
                남은 할일<span>0</span>개
            </p>
        </Wrapper>
    );
}
export default TodoTitle;

// font-size: ${(props) => props.theme.fontSize.xLarge};
const Wrapper = styled.div`
    ${flexCenter} //styled components css 기능으로 css 문법을 재사용 할 수 있도록 (변수화)
    ${title}

    background-color: ${(props) => props.theme.palette.primary[200]};

    font-size: ${({ theme }) => theme.fontSize.xLarge};

    // & 자기 자신
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

// react router param, styled component reset css, global style
