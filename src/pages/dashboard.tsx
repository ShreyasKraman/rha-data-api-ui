import React from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';

import LoginContainer from '../container/Account/LoginContainer';
import Layout from '../container/Layout/Layout';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import DashboardContainer from '../components/Dashboard/dashboard';

import {AccountState} from '../types/types';

const Dashboard = (props:AccountState) => {

    return(
        <Layout>
            <Router>
                <PrivateRoute path='/dashboard' Component={DashboardContainer} isAuthUser={props.data ? props.data.isAuthUser : false}/>
                <LoginContainer path='/dashboard/login' />
            </Router>
        </Layout>
    )

}

const mapStateToProps = (state:{ account:AccountState }) => ({
    data: state.account ? state.account.data : '',
});

export default connect(mapStateToProps)(Dashboard);