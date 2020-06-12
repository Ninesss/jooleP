const filterReducer = (state = [], action) => {
    switch(action.type){
        case 'FILTER':
            return action.group;
        default:
            return state;
    }
}

export default filterReducer