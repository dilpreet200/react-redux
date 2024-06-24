const initialStateCustomer = {
    fullName: "",
    nationalId: "",
    createdAt: ""
}

export default function customersReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullName, nationalId) {
    return { type: "customers/createCustomer", payload: { fullName, nationalId, createdAt: new Date().toISOString() } };
}
export function updateName(fullName) {
    return { type: "customers/updateName", payload: fullName };
}