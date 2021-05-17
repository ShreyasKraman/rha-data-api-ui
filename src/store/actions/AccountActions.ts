import account from '../../api/Account';
import {Dispatch} from 'redux'

import * as types from '../../constants/ActionTypes';
import {AccountApiResponse,AccountAPIDataResponse} from '../../types/types'

const loginToAccount = (data:AccountAPIDataResponse) => ({
    type: types.LOGIN_TO_ACCOUNT,
    data
})

export const login = (username:string,password:string, dispatch: Dispatch) => {
    console.log('received in login',[username,password]);
    account.login(username,password, (response: AccountApiResponse) => {
        dispatch(loginToAccount(response.data));
    });
}