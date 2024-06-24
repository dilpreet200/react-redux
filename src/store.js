import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountsReducer from './features/accounts/accountSlice';
import customersReducer from './features/customers/customerSlice';

//to combine all the reducers, we create an object of all the reducers and pass it to a redux function named combineReducers
const rootReducer = combineReducers({
    account: accountsReducer,
    customer: customersReducer
})

//creating a account store 
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;