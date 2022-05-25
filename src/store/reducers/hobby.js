const initalState = {
    list: [],
    activeId: null
}

const hobbyReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_HOBBY": {

            return {
                ...state,
                list: [action.payload, ...state.list]
            }
        }
        case "SET_ACTIVE_HOBBY": {
            return {
                ...state,
                activeId: action.payload.id
            }
        }
        default:
            return state
    }
}

export default hobbyReducer