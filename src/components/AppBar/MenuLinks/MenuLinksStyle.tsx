import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {blue, blueGrey, brown, cyan, deepOrange, deepPurple, indigo, lightBlue, lime, orange, pink, purple, red, yellow} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuLinks: {
              flexGrow: 1,
              textDecoration: 'none',
              color: '#fff',
              marginRight: theme.spacing(2)
            },
            avatarButton:{
              padding:'0'
            },
            deepOrange: {
                color: theme.palette.getContrastText(deepOrange[500]),
                backgroundColor: deepOrange[500],
              },
            deepPurple: {
              color: theme.palette.getContrastText(deepPurple[500]),
              backgroundColor: deepPurple[500],
            },
            orange: {
                color: theme.palette.getContrastText(orange[500]),
                backgroundColor: orange[500],
              },
            blue: {
              color: theme.palette.getContrastText(blue[500]),
              backgroundColor: blue[500],
            },
            blueGrey: {
                color: theme.palette.getContrastText(blueGrey[500]),
                backgroundColor: blueGrey[500],
              },
            brown: {
              color: theme.palette.getContrastText(brown[500]),
              backgroundColor: brown[500],
            },
            cyan: {
                color: theme.palette.getContrastText(cyan[500]),
                backgroundColor: cyan[500],
              },
            indigo: {
              color: theme.palette.getContrastText(indigo[500]),
              backgroundColor: indigo[500],
            },
            lightBlue: {
                color: theme.palette.getContrastText(lightBlue[500]),
                backgroundColor: lightBlue[500],
              },
            lime: {
              color: theme.palette.getContrastText(lime[500]),
              backgroundColor: lime[500],
            },
            pink: {
                color: theme.palette.getContrastText(pink[500]),
                backgroundColor: pink[500],
              },
            purple: {
              color: theme.palette.getContrastText(purple[500]),
              backgroundColor: purple[500],
            },
            red: {
                color: theme.palette.getContrastText(red[500]),
                backgroundColor: red[500],
              },
            yellow: {
              color: theme.palette.getContrastText(yellow[500]),
              backgroundColor: yellow[500],
            },
        }),
);