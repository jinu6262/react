import { ThemeProvider } from "styled-components";
import Routing from "./routes/Routing";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

function App() {
    //설정파일을 몰아둠

    // ThemeProvider -> 특정 스타일을 전역 스코프에 지정해주고
    // 컴포넌트에서 import 없이 받아서 사용할 수 있도록 하는 것
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routing />
        </ThemeProvider>
    );
}
export default App;

// module net found : 경로 확인, 해당 파일이 존재하는지(오타)
// is not defined : 99% 확률로 오타, 해당 변수 혹은 참조가 선언 되어있지 않다

// There is no Silver Bullets (개발에 은탄환은 없다)

// 악의 무리, 혹은 커다란 문제를 완벽하게 해결하기 위한 정답은 없다
// 이유 => 소프트 웨어는 복잡한 체계를 갖고 있기 때문
