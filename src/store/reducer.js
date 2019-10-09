const initialState = {
    counter:0
}

const rootReducer = (state=initialState,action)=>{
    if(action.type === 'ADD')
    {
        return {
            ...state,
            counter:state.counter+5
        }
    }
    if(action.type === 'SUB')
    {
        return {
            ...state,
            counter:state.counter-5
        }
    }
    return state
}

export default rootReducer;