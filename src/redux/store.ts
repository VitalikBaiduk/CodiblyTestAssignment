import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { mainDataReducer } from "./reducers/mainDataReducer";

let rootReducer = combineReducers({
  mainDataReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

//@ts-ignore
window.store = store;
