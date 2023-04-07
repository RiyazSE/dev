import { combineReducers,createStore } from "redux";
import { countReducer } from "./reducer";



const rootReducer = combineReducers({
    countReducer,
})

const store = createStore(rootReducer)

export default store;