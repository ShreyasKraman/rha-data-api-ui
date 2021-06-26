import React from 'react';

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import Layout from '../container/Layout/Layout';
import {navigate} from 'gatsby'

const App = () => {

    return (
        <Layout>
            <Container maxWidth="lg">
                <Typography variant="h4" align='center'>
                    Welcome to Robinhood Army Data Analytics tool
                </Typography>
                <Typography component='div' align='center'>
                    <Button variant='outlined' color='primary' onClick={()=>navigate('/dashboard', {replace:true})}> Go to Dashboard </Button>
                </Typography>
            </Container>
        </Layout>
    ) 
};

export default App;