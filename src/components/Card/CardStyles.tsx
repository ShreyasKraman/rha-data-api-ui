import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(5,8),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1,1),
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0,0),
      },
    },
    header:{
      textAlign: 'center'
    }
  }),
);