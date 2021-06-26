import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {blue, blueGrey, brown, cyan, deepOrange, deepPurple, indigo, lightBlue, lime, orange, pink, purple, red, yellow} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
            menuLinks: {
              textDecoration: 'none',
              color: '#fff',
              marginRight: theme.spacing(2)
            },
            sectionDesktop: {
              display: 'none',
              [theme.breakpoints.up('md')]: {
                display: 'flex',
              },
            },
            sectionMobile: {
              display: 'flex',
              [theme.breakpoints.up('md')]: {
                display: 'none',
              },
            },
        }),
);