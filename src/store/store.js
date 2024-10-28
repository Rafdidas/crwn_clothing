import { compose,  legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // 액션이 디스패치될 때마다 상태 변경 내역을 콘솔에 출력

import { rootReducer } from "./root-reducer";

const middleWares = [logger]; // 미들웨어를 관리할 배열을 만들고, 그 안에 logger 미들웨어를 추가
const composedEnhancers = compose(applyMiddleware(...middleWares)); // applyMiddleware를 사용하여 미들웨어를 추가하고, compose로 미들웨어를 결합하여 Redux가 이를 사용할 수 있게 함

export const store = createStore(rootReducer, undefined, composedEnhancers);
// createStore 함수를 사용해 Redux 스토어를 생성
// 첫 번째 인자는 루트 리듀서, 두 번째 인자는 초기 상태로 undefined가 들어가며, 세 번째 인자로 composedEnhancers
// 이렇게 생성된 store는 애플리케이션의 전역 상태를 관리하며, 다른 컴포넌트에서 store에 접근하거나 액션을 디스패치해 상태를 변경