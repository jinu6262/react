import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoPage from "./pages/todo";
import rootReducer from "./reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const store = createStore(rootReducer); // store 공간을 만듬

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<TodoPage />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
