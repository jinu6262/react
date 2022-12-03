// // 1
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import FullLayout from "../components/Layout/FullLayout";
// import HeaderLayout from "../components/Layout/HeaderLayout";
// import HomePage from "../pages/Home";
// import TodoPage from "../pages/TodoList";
// import PrivateRoute from "./privateRoute";

// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* 풀레이아웃 인 것은 여기에 배치 */}
//                 <Route element={<FullLayout />}>
//                     <Route path="/" element={<HomePage />} />
//                 </Route>

//                 {/* 헤더레이아웃만 있으면 여기에 배치 */}
//                 <Route element={<PrivateRoute />}>
//                     <Route element={<HeaderLayout />}>
//                         <Route path="/title" element={<div>title</div>} />
//                         <Route path="/todo" element={<TodoPage />} />
//                     </Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// };
// export default Router;

import TodoListpage from "pages/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullLayout from "../components/Layout/FullLayout";
import HeaderLayout from "../components/Layout/HeaderLayout";
import HomePage from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*public*/}
                <Route element={<FullLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>

                {/*private*/}
                <Route element={<PrivateRoute />}>
                    <Route element={<HeaderLayout />}>
                        <Route path="/todo" element={<TodoListpage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
