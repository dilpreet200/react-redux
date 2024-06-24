import { combineReducers, createStore } from "redux";

//declaring and initialising initial state
const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

//declaring and initialising initial state
const initialStateCustomer = {
    fullName: "",
    nationalId: "",
    createdAt: ""
}

//Accounts reducer function
const accountsReducer = (state = initialStateAccount, action) => {
    switch (action.type) {
        case "accounts/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
            }
        case "accounts/withdrawl":

            return {
                ...state,
                balance: state.balance - action.payload,
            }
        case "accounts/requestLoan":
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.loanPurpose,
                balance: state.balance + action.payload.amount,
            }
        case "accounts/payLoan":
            return {
                ...state,
                loanPurpose: "",
                balance: state.balance - state.loan,
                loan: 0,
            }
        default:
            return state;
    }
}

//Customer reducer function
const customersReducer = (state = initialStateCustomer, action) => {
    switch (action.type) {
        case "customers/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt
            }
        case "customers/updateName":
            return {
                ...state,
                fullName: action.payload,
            }
        default:
            return state;
    }
}

//to combine all the reducers, we create an object of all the reducers and pass it to a redux function named combineReducers
const rootReducer = combineReducers({
    account: accountsReducer,
    customer: customersReducer
})

//creating a account store 
const store = createStore(rootReducer);

//Accounts action creators
function deposit(amount) {
    return { type: "accounts/deposit", payload: amount };
}
function withdrawl(amount) {
    return { type: "accounts/withdrawl", payload: amount };
}
function requestLoan(amount, loanPurpose) {
    return { type: "accounts/requestLoan", payload: { amount: amount, loanPurpose: loanPurpose } };
}
function payLoan() {
    return { type: "accounts/payLoan" };
}



//Customer action creater
function createCustomer(fullName, nationalId) {
    return { type: "customers/createCustomer", payload: { fullName, nationalId, createdAt: new Date().toISOString() } };
}
function updateName(fullName) {
    return { type: "customers/updateName", payload: fullName };
}