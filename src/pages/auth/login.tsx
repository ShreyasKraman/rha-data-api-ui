import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container'
import SignIn from '../../components/account/signIn/signIn';
import Grid from '@material-ui/core/Grid';

const LoginPage = () => {


    return(
        <Container maxWidth="sm">
            <Card square>
                <CardHeader title="Login to dashboard"/>
                <CardContent>
                    <SignIn/>
                </CardContent>
            </Card>
        </Container>
    )

}

export default LoginPage;