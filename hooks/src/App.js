import AddState from "./components/addState";
import UseMemoCallback from "./components/memoCallback";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import UseState from "./components/useState";

function App() {
    return (
        <>
            <UseState />
            <UseRef />
            <AddState />
            <UseMemoCallback />
            <UseEffect />
        </>
    );
}
export default App;
