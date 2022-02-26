import { createStore, combineReducers } from "redux";
import { reducerHome } from "./Home/reducerHome";
import { reducerShop } from "./Shop/reducerShop";

const rootReducer = combineReducers({
    home: reducerHome,
    shop: reducerShop,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)