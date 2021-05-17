import {AccountAction, AccountState} from '../../types/types';
import {LOGIN_TO_ACCOUNT, REGISTER_ACCOUNT} from '../../constants/ActionTypes';

/**
 * Reducer to store user account
 * @param state an object which contains response of api
 * @param action an object
 * @returns an object containing account state
 */
export const account = (state = {}, action: AccountAction) : Object => {
    switch(action.type){
        case LOGIN_TO_ACCOUNT:
            console.log('in login action',action.data)
            return{
                ...state,
                token:action.data.token
            }
        default:
            return state
    }
}

// export const getAccountToken = (state: AccountState) => state.account.token;