import { combineReducers, Reducer } from 'redux'
import userReducer from './user/reducers'

const rootReducer: Reducer = combineReducers({
    users: userReducer
})

export default rootReducer