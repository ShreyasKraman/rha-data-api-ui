import account from '../../api/Account';
import {Dispatch} from 'redux'

import * as types from '../../constants/ActionTypes';
import {AccountApiResponse,AccountAPIDataResponse} from '../../types/types'

const loginToAccount = (data:AccountAPIDataResponse) => ({
    type: types.LOGIN_TO_ACCOUNT,
    data
})

const loginError = () => ({
    type: types.LOGIN_ERROR,
})

export const login = (username:string,password:string, dispatch: Dispatch) => {
    console.log('in here');
    account.login(username,password, (response: AccountApiResponse) => {
        if(response.data)
            dispatch(loginToAccount(response.data));
        else
            dispatch(loginError())
    });
}