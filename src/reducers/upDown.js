const initialState=10;

const changeNumber =(state=initialState, action) => {
    switch(action.type){
        case "INCREMENT": return state+action.payloadXyz;
        case "DECREMENT": return state-action.payloadDec;
        default: return state;
    }
}

export default changeNumber;