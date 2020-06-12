import axios from 'axios';



export const login = (u) => {
    return dispatch => {
        const user = axios.post(`http://localhost:8080/authenticate`, u);
        return user.then(
            response=>{
                localStorage.setItem('sessionToken', response.data.sessionToken);
                dispatch(userLogin(response.data.username));
                // return{
                //     type:"LOGIN"
                // }
            },
            err=>{
                console.log(err);
                
            }
        );
    }
}

const userLogin = user => ({
    type:'LOGIN',
    username: user
})

export const logout = () => {
    localStorage.removeItem('sessionToken');
    return {
        type: 'LOGOUT'
    }
}