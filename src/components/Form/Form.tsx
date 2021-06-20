import React from 'react';
import {IFields, IFormState} from '../../types/types';

import Grid from '@material-ui/core/Grid'
import FormField from './FormField/FormField';

import {useStyles} from './FormStyles'

export interface IFormProps{
    fields: IFields,
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onLoginClicked?: () => void,
    formData: IFormState
}

const Form = (props:IFormProps) => {
    const classes = useStyles();
    
    const usernameValue = props.formData.values[props.fields.usernameField.id];
    const passwordValue = props.formData.values[props.fields.passwordField.id];

    return (
        <form className={classes.root} autoComplete="off">
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                <FormField value={usernameValue ? usernameValue : ''}
                        error={props.formData.errors[props.fields.usernameField.id]}     
                        field={props.fields.usernameField} 
                        onInputChange={props.onInputChange}
                />
                <FormField value={passwordValue ? passwordValue : '' }
                        error={props.formData.errors[props.fields.passwordField.id]}
                        field={props.fields.passwordField}
                        onInputChange={props.onInputChange}/>
                <FormField field={props.fields.loginButton} onLoginClicked={props.onLoginClicked}/>
            </Grid>
        </form>
    );
}

export default Form;