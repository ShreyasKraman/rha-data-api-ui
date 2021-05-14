import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'

const SignIn = () => {


    return(
        <form autoComplete="off">
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <TextField fullWidth  id="username" variant="outlined" label="Username" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="password" variant="outlined" type="password" label="Password" />
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={4}>
                    <Button fullWidth variant="contained" color="primary">Login</Button>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" display="block"> Don't have an account? <Link to='/auth/register'>Register</Link> </Typography>
                </Grid>
            </Grid>
        </form>
    )

}

export default SignIn;