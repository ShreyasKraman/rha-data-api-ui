import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'gatsby'

import {AccountState} from '../../types/types';

import {useStyles} from './MenuBarStyle';

const Menubar = (props : AccountState) => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar className={classes.root} position="static" style={{marginBottom:'2rem'}}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6">
                    <Link style={{textDecoration:'none', color:'#fff' }} to='/'>Robinhood API</Link>
                </Typography>
                {!props.data && <Link style={{textDecoration:'none', color:'#fff' }} to='/'>LOGIN</Link>}
                {props.data ? 
                    props.data.token ?
                        <> 
                        <IconButton aria-controls='simple-menu' color="inherit" aria-label="avatar" onClick={handleClick}>
                            <Avatar className={classes[props.data.avatarColor]}>{props.data.token[0].toUpperCase()}</Avatar> 
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                      </>
                        : '' 
                    : ''
                }
            </Toolbar>
        </AppBar>
    )

}

const mapStateToProps = (state:{ account:AccountState }) => ({
    data: state.account ? state.account.data : '',
});

export default connect(mapStateToProps)(Menubar);