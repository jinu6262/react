import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducer";
import rootSaga from "../saga";

// 미들웨어를 생성함
const logger = createLogger();
// 로거 생성
const sagaMiddleware = createSagaMiddleware();
// 사가 생성

// 로거와 사가를 사용할것이라 명시함
const createConfigure = () => {
    const store = createStore(
        rootReducer,
        process.env.NODE_ENV === "development"
            ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
            : applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);

    return store;
};
export default createConfigure;
