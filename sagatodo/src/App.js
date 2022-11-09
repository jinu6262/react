import { Provider } from "react-redux";
import createConfigure from "./store";
import TodoPage from "./pages/todo";

function App() {
    console.log(process.env.NODE_ENV); // 리엑트에서 기본지원
    console.log(process.env.REACT_APP_TOKEN); // 내가 만듬

    /*
      1. 개발환경인지 배포환경인지 알기 위해서
        test-server (test API URL), (라이브러리 설정 개발자용 라이브러리)

      2. 값을 숨기기 위해서, 외부에서 키 값을 공개하지 않기 위해서
        (API, URL, 계정, 암호, key)
    */

    const store = createConfigure();
    return (
        <Provider store={store}>
            <TodoPage />
        </Provider>
    );
}

export default App;
