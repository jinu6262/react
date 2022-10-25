import { createGlobalStyle } from "styled-components";
// {}안에 있으면 한글자라도 틀리면 안됨, key 값(이름)으로 가지고 오는 것
// {} 없으면 경로만 맞으면 가지고 올 수 있다.
import reset from "styled-reset";

/*
    cmd (powershell)
    reset css
    npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
`;
export default GlobalStyles;
