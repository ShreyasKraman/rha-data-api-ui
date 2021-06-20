import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';

import {login} from '../../store/actions/AccountActions'
import {AccountState,IFields, IValues, IErrors, IFormState} from '../../types/types'

import Container from '@material-ui/core/Container'
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

import SignIn from '../../components/Account/SignIn/SignIn';
import Card from '../../components/Card/Card';
import {LoginFields} from '../../constants/FormFields';

import {useStyles} from './LoginContainerStyles';

import {deepClone, getValidationMessage, required} from '../../utils/helpers'

interface Props extends AccountState {
    accountLogin: (username:string,password:string) => void
}

const LoginContainer = (props: Props) => {

    const classes = useStyles();

    const [formState, setFormState] = useState<IFormState>({values:{},errors:{}});
    const [loader, setLoader] = useState<Boolean>(false);

    useEffect(()=>{
        if(props.data || props.error){
            setLoader(false);
        }
    },[props.data,props.error]);

    const onInputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const id = e.target.id;

        const currentFormState = deepClone(formState);
        if(currentFormState.errors[id]){
            delete currentFormState.errors[id];
        }

        setFormState({
            ...currentFormState,
            values:{
                ...currentFormState.values,
                [id]:value
            },
            errors:{
                ...currentFormState.errors,
            }
        })
    }

    const validateFields = (fields:IFields, values:IValues):boolean => {
        const newErrors: IErrors = {};
        for(let key in fields){
            if(fields[key].validation){
                const message = getValidationMessage(fields[key].validation,values, fields[key].id);
                if(message !== "")newErrors[fields[key].id] = message;
            }
        }

        setFormState({
            ...formState,
            errors:{
                ...formState.errors,
                ...newErrors
            },
        })

        return Object.keys(newErrors).length > 0;
    }

    const onSubmit = () => {
        setLoader(true);
        if(!validateFields(LoginFields, formState.values)){
            const currentFormState = {...formState};
            props.accountLogin(currentFormState.values.username,formState.values.password);
        }
    }

    return (
        <Container className={classes.root} maxWidth='sm'>
            {loader ? <LinearProgress /> : ''}
            <Card header="Login to dashboard">
                {props.error ? <Alert className={classes.alert} severity='error'>{props.error.message}</Alert> : ''}
                <SignIn
                    loginFields={LoginFields} 
                    onLoginClicked = {onSubmit}
                    onInputChange = {onInputHandler}
                    formData = {formState}
                />
            </Card>
            {/* <p>Token : {props.data ? props.data.token : ''}</p> */}
        </Container>
    )
}

const mapStateToProps = (state:{ account:AccountState }) => ({
    data: state.account ? state.account.data : '',
    error: state.account ? state.account.error : '',
});

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        accountLogin: (username:string, password:string) => login(username, password, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);