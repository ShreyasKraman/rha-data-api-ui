import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container'
import CreateAccount from '../../components/Account/CreateAccount/createAccount';

const LoginPage = () => {


    return(
        <Container maxWidth="sm">
            <Card square>
                <CardHeader title="Create Your Account"/>
                <CardContent>
                    <CreateAccount/>
                </CardContent>
            </Card>
        </Container>
    )

}

export default LoginPage;