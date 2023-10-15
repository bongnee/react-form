import { combineReducers, createStore } from "redux";
import { ReactFormReducer } from "./reducers/reactForm.reducer";


const rootReducer = combineReducers({
    ReactFormReducer
})
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );