import { combineReducers } from 'redux'
import { movieReducer } from './ShowingMovie/slice'
import { movieAdminReducer } from './MovieAdmin/slice'
import { userAdminReducer } from './UserAdmin/slice'
export const rootReducer = combineReducers({
    movie:movieReducer,
    movieAdmin:movieAdminReducer,
    userAdmin:userAdminReducer
})
