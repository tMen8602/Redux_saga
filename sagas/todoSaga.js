// src/sagas/todoSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { setTodos } from '../features/todoSlice';

// Hàm giả lập gọi API
const fetchTodosApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
};

// Saga để lấy danh sách todos
function* fetchTodos() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put(setTodos(todos));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

// Theo dõi action
function* todoSaga() {
  yield takeEvery('todos/fetch', fetchTodos);
}

export default todoSaga;
