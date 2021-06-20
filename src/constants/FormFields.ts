import {IFields} from '../types/types'

export const LoginFields: IFields = {
    usernameField: {
        id: 'username',
        label: 'Username',
        editor: 'textbox',
        type: 'email',
        validation: {rule: ['Required', 'Email']}
    },
    passwordField:{
        id: 'password',
        label: 'Password',
        editor: 'textbox',
        type: 'password',
        validation: {rule : ['Required']}
    },
    loginButton:{
        id: 'login',
        label: 'Login',
        editor: 'button',
    }
}