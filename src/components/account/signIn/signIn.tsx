import React, {useState} from 'react';
import Form from '../../Form/Form';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import {Error, IFields, IFormState} from '../../../types/types'


import {USERNAME_REQUIRED, PASSWORD_REQUIRED} from '../../../constants/ActionTypes';
import { useStyles } from './SignInStyle';
 
interface Props{
    loginFields: IFields,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onLoginClicked: () => void,
    formData: IFormState
}

const SignIn = (props: Props) => {

    const classes = useStyles();

    return (
        <div>
            <Form
                fields = {props.loginFields}
                onInputChange = {props.onInputChange}
                onLoginClicked = {props.onLoginClicked}
                formData = {props.formData}
            />
            <Divider/>
            <div className={classes.section3}>
                <Typography variant="subtitle1" display="block"> Don't have an account? <Link to='/auth/register'>Register</Link> </Typography>
            </div>
        </div>
    )
}


export default SignIn;