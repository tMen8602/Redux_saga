// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../features/todoSlice';
import todoSaga from '../sagas/todoSaga';

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Chạy saga
sagaMiddleware.run(todoSaga);

export default store;
