import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    //   margin: theme.spacing(1),
      // textAlign: 'center'
    },
    alert: {
      margin: theme.spacing(0,0,3)
    }
  }),
);