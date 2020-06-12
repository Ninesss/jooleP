import update from 'immutability-helper';

const compareReducer = (state = {group:[false,false,false,false]}, action) => {
    switch(action.type){
        case 'SET_COMPARE':
            return update(state, {
                group: {
                    [action.product-1]: {$set: !state.group[action.product-1]}
                    }
                }
            )
        default:
            return state;
    }
}

export default compareReducer