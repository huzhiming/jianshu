import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';//使action可以是一个函数，可以做异步处理
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // compose 是一个包装函数，逐一执行方法
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
export default store;
