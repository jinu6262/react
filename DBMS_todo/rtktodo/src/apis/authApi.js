import { axiosInstance } from "apis";

const path = "/user";

export const AuthApi = {
    //로그인 로직
    login: ({ email, password }) => {
        return (
            axiosInstance
                .post(path + "/login", { email, password })
                // .then((res) => res.data) //retrun 생략, res.data만 리턴하고있다
                .catch((err) => {
                    throw new Error(err);
                    // 상위 예외처리문으로 예외를 넘긴다
                    // 콘솔 에러만 찍는 경우 던질 이유는 없다

                    // 원래 여기서 에러 바운더링(에러 핸들링)을 해줘야 된다
                })
        );
    },
    signup: ({ email, password }) => {
        return axiosInstance.post(path + "/sign", { email, password });
    },
};

//강사님 자료
// import { axiosInstance } from "apis";

// const path = "/user";

// export const AuthApi = {
//     login: ({ email, password }) => {
//         return axiosInstance.post(path + "/login", { email, password });
//         // .then((res) => res)
//         // .catch((err) => {
//         //     throw new Error(err.response.data.error);
//         //     // 상위 예외처리문으로 예외를 넘긴다.
//         // });
//     },
//     signup: ({ email, password }) => {
//         return axiosInstance.post(path + "/sign", { email, password });
//     },
// };
