import account from '../../api/Account';
import {Dispatch} from 'redux'
import {navigate} from 'gatsby';
import * as types from '../../constants/ActionTypes';
import {AccountApiResponse,AccountAPIDataResponse} from '../../types/types'

const loginToAccount = (data:AccountAPIDataResponse) => ({
    type: types.LOGIN_TO_ACCOUNT,
    data
})

const loginError = () => ({
    type: types.LOGIN_ERROR,
})

const alreadyLoggedIn = () => ({
    type: types.ALREADY_LOGGEDIN,
})

const logoutFromAccount = () => ({
    type: types.LOGOUT
})

export const login = (username:string,password:string, dispatch: Dispatch) => {
    account.login(username,password, (response: AccountApiResponse) => {
        if(response.data){
            dispatch(loginToAccount(response.data));
            navigate('/dashboard')
        }
        else
            dispatch(loginError())
    });
}

export const checkLogin = (dispatch:Dispatch) => dispatch(alreadyLoggedIn());

export const logout = (dispatch:Dispatch) => {
    dispatch(logoutFromAccount())
    navigate('/');
};