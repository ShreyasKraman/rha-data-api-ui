import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {IFieldProps} from '../../../types/types'

import {useStyles} from '../FormStyles'

export interface IFormFieldProps{
    field: IFieldProps,
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onLoginClicked?: () => void,
    value?:string,
    error?:string
}

const FormField = (props: IFormFieldProps) => {
  
    const classes = useStyles();

    return (
    <Grid item xs={12}>
        {props.field.editor!.toLowerCase() === 'textbox' && (
            <TextField
                error = {props.error ? props.error.length>0 : false}
                fullWidth  
                id={props.field.id} 
                onChange={props.onInputChange}
                variant="outlined" 
                label={props.field.label} 
                type={props.field.type}
                value={props.value}
                helperText = {props.error ? props.error : ''}    
            />
        )}
        {props.field.editor!.toLowerCase() === 'button' && (
            <div className={classes.section2}>
                <Button fullWidth 
                    variant="contained" 
                    color="primary" 
                    onClick={props.onLoginClicked}
                >
                    {props.field.label}
                </Button>
            </div>
        )}
    </Grid>
    );
}

export default FormField;