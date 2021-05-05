const INITIAL_STATE ={
    showPopUp: false,
    showSignIn: true,
    showSignUp: false
}

const showReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case "SET_SIGN_IN":
            return{
                ...state,
                showSignIn: action.payload
            }
        case "SET_POP_UP":
            return{
                ...state,
                showPopUp: action.payload
            }

        case "SET_SIGN_UP":
            return{
                ...state,
                showSignUp: action.payload
            }

        default:
            return state;
    }
}

export default showReducer;