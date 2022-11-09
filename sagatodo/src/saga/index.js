import { all, fork } from "redux-saga/effects";
import todoSaga from "./todo";

export default function* rootSaga() {
    yield all([fork(todoSaga)]); //기다려 yield를 사용하려면 function에 *이 붙어야됨
}
