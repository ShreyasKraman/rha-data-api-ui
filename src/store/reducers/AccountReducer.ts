import {AccountAction, AccountState, Error} from '../../types/types';
import {LOGIN_TO_ACCOUNT, REGISTER_ACCOUNT, LOGIN_ERROR, ALREADY_LOGGEDIN, LOGOUT} from '../../constants/ActionTypes';
import { deepClone, getColor } from '../../utils/helpers';

/**
 * Reducer to store user account
 * @param state an object which contains response of api
 * @param action an object
 * @returns an object containing account state
 */
export const account = (state : AccountState = {}, action: AccountAction) : Object => {
    console.log('account reducer',action)
    // const errors: Array<Error> = state ? state.errors ? state.errors.slice() : [] : [];
    switch(action.type){
        case LOGIN_TO_ACCOUNT:
            const previousState = deepClone(state);
            if(previousState.error)delete previousState.error;
            localStorage.setItem('user_token',action.data.token);

            const randomColor = getColor();
            localStorage.setItem('user_avatar',randomColor);
            previousState.data = {
                token: action.data.token,
                avatarColor: randomColor,
                isAuthUser: true
            }
            return previousState;
        case LOGIN_ERROR:
            return {
                ...state,
                error: {
                    type: LOGIN_ERROR,
                    message: 'Unable to login, please try again!'
                }
            }
        case ALREADY_LOGGEDIN:
            const token = localStorage.getItem('user_token'); 
            console.log('in alerady logged',token)
            if(token){
                return {
                    ...state,
                    data:{
                        token,
                        avatarColor: localStorage.getItem('user_avatar'),
                        isAuthUser: true
                    }
                }
            }
            return {}
        case LOGOUT:
            if(localStorage.getItem('user_token')){
                localStorage.setItem('user_token','');
                localStorage.setItem('user_avatar','');
            }
            return {}
        default:
            return state
    }
}

// export const getAccountToken = (state: AccountState) => state.account.token;