import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    productTable: reducer
})

const store = createStore(reducers)

export default store