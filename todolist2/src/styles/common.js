// 공용 스타일
import { css } from "styled-components";

//디폴트가 없는 export는 가져올때 중괄호를 이용해여 import 해줘야됨
export const flexCenter = css`
    //styled-components 에서 지원해주는 기능
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const title = css`
    font-size: 48px;
    line-height: 16px;
    font-weight: bold;
`;
