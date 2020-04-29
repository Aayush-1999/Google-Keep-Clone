import * as actionTypes from '../actions/actionTypes';

const initialStore={
    user:null,
    token:null,
    refreshToken:null,
    authenticated:false
}

const reducer=(state=initialStore,action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                user:action.user,
                token:action.token,
                refreshToken:action.refreshToken,
                authenticated:true
            }
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                user:null,
                token:null,
                refreshToken:null,
                authenticated:false
            }
        default: return state;
    }
}

export default reducer;