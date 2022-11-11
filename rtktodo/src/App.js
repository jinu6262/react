import { Provider } from "react-redux";
import TodoPage from "./pages/todo";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
            <TodoPage />
        </Provider>
    );
}

export default App;
