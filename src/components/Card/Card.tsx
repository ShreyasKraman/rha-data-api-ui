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

import {useStyles} from './CardStyles';

interface Props extends AccountState {
    header:string,
    children: React.ReactNode,
}

const CardComponent = (props: Props) => {

    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header} title={props.header}/>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default CardComponent;