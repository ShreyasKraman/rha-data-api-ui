import {AccountAction, AccountState, Error} from '../../types/types';
import {LOGIN_TO_ACCOUNT, REGISTER_ACCOUNT, LOGIN_ERROR} from '../../constants/ActionTypes';
import { deepClone } from '../../utils/helpers';

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
            const bgColor = ['brown', 'cyan', 'deepOrange', 'deepPurple', 'indigo', 'lightBlue', 'lime', 'orange', 'pink', 'purple', 'red', 'yellow'];
            const randomColor:string = bgColor[Math.floor(Math.random()*bgColor.length)];
            const previousState = deepClone(state);
            if(previousState.error)delete previousState.error;
            previousState.data = {
                token: action.data.token,
                avatarColor: randomColor
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
        default:
            return state
    }
}

// export const getAccountToken = (state: AccountState) => state.account.token;