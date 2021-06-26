import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import TypoGraphy from '@material-ui/core/Typography';
import {Link} from 'gatsby'
import {useStyles} from './MenuLinksStyle';
import {LOGOUT} from '../../../constants/ActionTypes';
import {AccountState} from '../../../types/types';
interface MenuLinksInterface extends AccountState {
    anchorEl:null | HTMLElement,
    handleClose:(id?:string)=>void,
    handleClick:(event: React.MouseEvent<HTMLButtonElement>)=>void
}

const MenuLinks = (props:MenuLinksInterface) => {

    const classes = useStyles();

    return(
    <>
        <TypoGraphy variant='h6'>
            <Link className={classes.menuLinks} to='/'>Home</Link>
        </TypoGraphy>
        {!props.data && 
            <TypoGraphy variant='h6'>
                <Link className={classes.menuLinks} to='/dashboard'>Login</Link>
            </TypoGraphy>
        }
        {props.data ? 
            props.data.token ?
                <> 
                <IconButton aria-controls='simple-menu' color="inherit" aria-label="avatar" onClick={handleClick}>
                    <Avatar className={classes[props.data.avatarColor]}>{props.data.token[0].toUpperCase()}</Avatar> 
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={props.anchorEl}
                    keepMounted
                    open={Boolean(props.anchorEl)}
                    onClose={props.handleClose}
                >
                    <MenuItem onClick={()=>props.handleClose()}>Profile</MenuItem>
                    <MenuItem onClick={()=>props.handleClose()}>My account</MenuItem>
                    <MenuItem onClick={()=>props.handleClose(LOGOUT)}>Logout</MenuItem>
                </Menu>
            </>
                : '' 
            : ''
        }
    </>
    );
}

export default MenuLinks;