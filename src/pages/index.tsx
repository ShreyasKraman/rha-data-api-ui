import React from 'react';
import {connect} from 'react-redux';

import LoginContainer from '../container/Account/LoginContainer';
import Layout from '../container/Layout/Layout';

import {AccountState} from '../types/types';

const App = (props:AccountState) => (
    <Layout>
        {!props.data ? <LoginContainer/> : ''}
        {props.data ? '' : ''}
    </Layout> 
);

const mapStateToProps = (state:{ account:AccountState }) => ({
    data: state.account ? state.account.data : '',
});

export default connect(mapStateToProps)(App);