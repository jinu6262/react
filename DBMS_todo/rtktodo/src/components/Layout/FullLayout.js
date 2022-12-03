// 2
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LayoutHeader from "./Header/Header";
import LayoutFooter from "./Footer/Footer";

function FullLayout() {
    return (
        // 구분을 위해 S.Wrapper 로 적음 스타일드 컴포넌트
        <S.Wrapper>
            <LayoutHeader />
            <Outlet />
            {/* react-router-dom */}
            {/* route에서 자식이 가르키고있는 / 알맞은 경로 요소(path)의 element를 랜더링*/}
            <LayoutFooter />
        </S.Wrapper>
    );
}
export default FullLayout;

const Wrapper = styled.div`
    min-height: 100vh;
`;

const S = {
    Wrapper,
};
