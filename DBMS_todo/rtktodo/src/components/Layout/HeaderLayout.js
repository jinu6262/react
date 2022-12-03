//4
import { Outlet } from "react-router-dom";
import LayoutHeader from "./Header/Header";
import * as S from "./Style";

function HeaderLayout() {
    return (
        <S.Wrapper>
            <LayoutHeader />
            <Outlet />
        </S.Wrapper>
    );
}
export default HeaderLayout;
