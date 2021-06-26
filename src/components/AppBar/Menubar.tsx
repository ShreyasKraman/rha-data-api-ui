import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'gatsby'

import {AccountState} from '../../types/types';

import {useStyles} from './MenuBarStyle';
import { logout } from '../../store/actions/AccountActions';
import {LOGOUT} from '../../constants/ActionTypes';

import MenuLinks from './MenuLinks/MenuLinks';

interface AppBarInterface extends AccountState {
    logoutFromAccount: () => void
}

const Menubar = (props : AppBarInterface) => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = (id?:string) => {
        switch(id){
            case LOGOUT: 
                props.logoutFromAccount();
                break;
            default: break;
        }
        setAnchorEl(null);
    };

    return (
        <AppBar className={classes.root} position="static" style={{marginBottom:'2rem'}}>
            <Toolbar>
                <div className={classes.sectionMobile}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>
                <Typography className={classes.title} variant="h6">
                    <Link style={{textDecoration:'none', color:'#fff' }} to='/'>Robinhood Analytics</Link>
                </Typography>
                <div className={classes.sectionDesktop}>
                    <MenuLinks
                        anchorEl={anchorEl}
                        data={props.data}
                        handleClick={handleClick}
                        handleClose={handleClose}
                    />
                </div>
            </Toolbar>
        </AppBar>
    )

}

const mapStateToProps = (state:{ account:AccountState }) => ({
    data: state.account ? state.account.data : '',
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logoutFromAccount: () => logout(dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Menubar);