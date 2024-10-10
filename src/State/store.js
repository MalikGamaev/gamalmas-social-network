import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import dialogsReducer from './Reducers/dialogsReducer'
import contentReducer from './Reducers/contentReducer'
import setBarReducer from './Reducers/setBarReducer'
import usersReducer from './Reducers/usersReducer'
import authReducer from './Reducers/authReducer'
import { thunk } from 'redux-thunk'
import appReducer from './Reducers/appReducer'
import { compose } from 'redux'

const thunkMiddleware = thunk
const reducers = combineReducers({
	contentPage: contentReducer,
	dialogsPage: dialogsReducer,
	setBar: setBarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;