import styled from "styled-components";
import { flexCenter, ModalBackground } from "libs/styles/common";
import useInput from "hooks/useInput";
import { useEffect, useState } from "react";
import { AuthApi } from "apis/authApi";

function HomeSignUpModal({ onCloseSignUpModal }) {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [error, setError] = useState(false);
    const [errtxt, setErrTxt] = useState(null);

    const onClickSignUpBtn = async () => {
        try {
            const res = await AuthApi.signup({ email, password });
            if (!alert(res.data.data)) onCloseSignUpModal();
        } catch (err) {
            setError(true);
            setErrTxt(err.response.data.error);
        }
    };

    useEffect(() => {
        setError(false);
    }, [email, password]);

    return (
        <S.Wrapper>
            <S.Conatiner>
                <S.Header>
                    <span>SIGNUP</span>
                    <span onClick={onCloseSignUpModal}>X</span>
                </S.Header>
                <S.Content>
                    <input
                        type={"text"}
                        placeholder="아이디를 입력해주세요"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <input
                        type={"password"}
                        placeholder={"비밀번호를 입력해주세요"}
                        value={password}
                        onChange={onChangePassword}
                    />
                    <button onClick={onClickSignUpBtn}>회원가입</button>
                    {error && <p>{errtxt}</p>}
                </S.Content>
            </S.Conatiner>
        </S.Wrapper>
    );
}
export default HomeSignUpModal;

const Wrapper = styled.div`
    ${ModalBackground};
`;

const Conatiner = styled.div`
    width: 380px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 32px;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    color: #fff;
`;

const Content = styled.div`
    ${flexCenter};
    flex-direction: column;
    padding: 32px 0;

    & input {
        border: 1px solid #999;
        margin-bottom: 8px;
    }
`;

const S = {
    Wrapper,
    Conatiner,
    Header,
    Content,
};
