const productsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_PRODUCTS':
            return action.group;
        default:
            return state;
    }
}

export default productsReducer