import { combineReducers } from 'redux';
import userReducer from "./user/user.reducer"
import showReducer from "./show/show.reducer"

export default combineReducers({
    user: userReducer,
    show: showReducer
})