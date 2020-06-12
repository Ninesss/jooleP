const authReducer = (state = {auth:false,name:""}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {auth:true,name:action.username};
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}

export default authReducer