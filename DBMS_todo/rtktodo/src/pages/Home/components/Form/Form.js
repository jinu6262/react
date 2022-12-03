import styled from "styled-components";
import { flexCenter } from "libs/styles/common";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";
// import { axiosInstance } from "apis";
import { AuthApi } from "apis/authApi";
import { TokenRepository } from "repository/TokenRepository";

function HomeLoginFrom() {
    const naviate = useNavigate();

    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");

    const onClickLoginBtn = async (e) => {
        e.preventDefault();

        try {
            const res = await AuthApi.login({ email, password });
            if (res.status === 200) {
                TokenRepository.setToken(res.data.data.token);

                if (TokenRepository.getToken()) {
                    naviate("/todo", { replace: true });
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <S.Form onSubmit={onClickLoginBtn}>
            <div>
                <button type="button"></button>{" "}
            </div>
            <input
                type="text"
                placeholder="아이디"
                value={email}
                onChange={onChangeEmail}
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangePassword}
            />
            <button>로그인</button>
        </S.Form>
    );
}
export default HomeLoginFrom;

const Form = styled.form`
    ${flexCenter}
    flex-direction: column;
    & input {
        background-color: #fff;
        border-radius: 2rem;
        outline: none;
        border: #999;
        margin-bottom: 8px;
    }
`;

const S = {
    Form,
};
