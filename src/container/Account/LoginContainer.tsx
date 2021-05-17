import React, {ReactHTMLElement, useState} from 'react';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';

import {login} from '../../store/actions/AccountActions'
import {AccountState} from '../../types/types'

import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import SignIn from '../../components/Account/SignIn/SignIn';

interface Props extends AccountState {
    accountLogin: (username:string,password:string) => void
}

const LoginContainer = (props: Props) => {

    const [account, setAccount] = useState({username:'',password:''});

    const onInputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const id = e.target.id;
        setAccount({
            ...account,
            [id]:value
        })
    }

    return (
        <Container maxWidth='sm'>
            <Card square>
                <CardHeader title="Login to dashboard"/>
                <CardContent>
                    <SignIn 
                        onLoginClicked = {() => props.accountLogin(account.username, account.password)}
                        onInput = {onInputHandler}
                    />
                </CardContent>
            </Card>
            <p>Token : {props.account.token}</p>
        </Container>
    )
}

const mapStateToProps = (state:AccountState) => ({
    account: state.account
});

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        accountLogin: (username:string, password:string) => login(username, password, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);