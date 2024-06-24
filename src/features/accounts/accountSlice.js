//This file is called slice because its just a part of the entire state

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

export default function accountsReducer(state = initialStateAccount, action) {
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

export function deposit(amount) {
    return { type: "accounts/deposit", payload: amount };
}
export function withdrawl(amount) {
    return { type: "accounts/withdrawl", payload: amount };
}
export function requestLoan(amount, loanPurpose) {
    return { type: "accounts/requestLoan", payload: { amount: amount, loanPurpose: loanPurpose } };
}
export function payLoan() {
    return { type: "accounts/payLoan" };
}
