import {combineReducers, createStore} from "redux";
import userReducer from "./users/user-reducer";


const rootReducer = combineReducers({
    usersState:userReducer
})

const reduxStore = createStore(rootReducer)

export default reduxStore