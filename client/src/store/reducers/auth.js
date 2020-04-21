import * as actionTypes from '../actions/actionTypes';

const initialStore={
    user:JSON.parse(localStorage.getItem('user')),
    token:localStorage.getItem('token'),
    refreshToken:localStorage.getItem('refreshToken'),
}

const reducer=(state=initialStore,action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                user:action.user,
                token:action.token,
                refreshToken:action.refreshToken
            }
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                user:null,
                token:null,
                refreshToken:null
            }
        default: return state;
    }
}

export default reducer;