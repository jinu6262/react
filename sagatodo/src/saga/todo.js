import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
    ADD_TODO_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SCUCESS,
    EDIT_TODO_FAILURE,
    EDIT_TODO_REQUEST,
    EDIT_TODO_SCUCESS,
    REMOVE_TODO_FAILURE,
    REMOVE_TODO_REQUEST,
    REMOVE_TODO_SCUCESS,
} from "../reducer/todo";

function* addTodo(action) {
    //여기서의 action은 takeLatest가 받은(캐치한) action
    try {
        //예외가 생길수도 있는 문장을 try에 적음 (성공하면 실행할 문장)

        yield delay(1000); //백엔드는 비동기이기 때문에 시간이 소요, 시간 딜레이를 구현

        /* 성공했으면 put */
        yield put({
            type: ADD_TODO_SCUCESS,
            payload: action.payload,
            // 왔던 action 값을 그대로 전달, 원래라면 백엔드에게 받은 데이터 전달
        });
    } catch (err) {
        // 실패할 때 실행할 문장

        yield put({
            type: ADD_TODO_FAILURE,
            payload: {
                error: err.response.data,
            },
        });
        throw new Error(err);
    }
}

function* removeTodo(action) {
    try {
        yield delay(1000); //백엔드는 비동기이기 때문에 시간이 소요, 시간 딜레이를 구현
        yield put({
            type: REMOVE_TODO_SCUCESS,
            payload: action.payload,
            // 왔던 action 값을 그대로 전달, 원래라면 백엔드에게 받은 데이터 전달
        });
    } catch (err) {
        // 실패할 때 실행할 문장

        yield put({
            type: REMOVE_TODO_FAILURE,
            payload: {
                error: err.response.data,
            },
        });
        throw new Error(err);
    }
}

function* editTodo(action) {
    try {
        yield delay(1000); //백엔드는 비동기이기 때문에 시간이 소요, 시간 딜레이를 구현
        yield put({
            type: EDIT_TODO_SCUCESS,
            payload: action.payload,
            // 왔던 action 값을 그대로 전달, 원래라면 백엔드에게 받은 데이터 전달
        });
    } catch (err) {
        // 실패할 때 실행할 문장

        yield put({
            type: EDIT_TODO_FAILURE,
            payload: {
                error: err.response.data,
            },
        });
        throw new Error(err);
    }
}

/*
    dispatch -> 백엔드 통신 -> 성공/실패 -> dispatch 
    (pending, loading)                    (success/fullfield, failure/rejcetr)
    saga란 비동기 로직이 있을때 첫 dispatch(loading dispatch)를 보내고
    백엔드 통신의 성공/실패에 따라서 dispatch를 또 보내주는 것
*/

/*
    takeLatest - 이벤트 리스너(쉽게 생각)
    reducer에 action이 전달되면
    해당 action_type을 캐치(action을 캐치)
*/
function* watchAddTodo() {
    yield takeLatest(ADD_TODO_REQUEST, addTodo);
    //takeLatest - 중복 요청 마지막 작업만 실행
}

function* watchRemoveTodo() {
    yield takeLatest(REMOVE_TODO_REQUEST, removeTodo);
}

function* watchEditTodo() {
    yield takeLatest(EDIT_TODO_REQUEST, editTodo);
}

// function* watchRemoveTodo() {
//     yield takeLatest(REMOVE_TODO, "removeTodo");
// }

export default function* todoSaga() {
    yield all([
        fork(watchAddTodo /*, fork(watchRemoveTodo) */),
        fork(watchRemoveTodo),
        fork(watchEditTodo),
    ]);
}
