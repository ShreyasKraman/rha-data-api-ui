import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // margin: theme.spacing(1),
      '& .MuiFormHelperText-contained': {
        margin: theme.spacing(1,0),
        // width: 200,
      },
    },
    section1:{
      marginBottom: theme.spacing(0,2),
    },
    section2:{
      margin: theme.spacing(2,0)
    },
    section3:{
      textAlign: 'center',
      margin: theme.spacing(2,0)
    }
  }),
);