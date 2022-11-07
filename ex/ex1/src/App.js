import AddState from "./component/addState";
import UseReducer from "./component/useReducer";
import ContextProvider from "./context/state";

function App() {
    return (
        <>
            {/* <UseReducer /> */}
            <ContextProvider>
                <AddState />
            </ContextProvider>
        </>
    );
}
export default App;
