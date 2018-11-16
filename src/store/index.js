import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // compose 是一个包装函数，逐一执行方法
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware()
));
export default store;
