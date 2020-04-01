export default theme=>({
    accountImage:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    accountIcon:{
        margin:`${theme.spacing(10)}px ${theme.spacing(8)}px`,
        width:'145px',
        height:'180px'
    },
    avatar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    cardBody:{
        padding: theme.spacing(3)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    grid:{
        marginTop:theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    label:{
        textTransform:'none'
    },
    paper: {
        [theme.breakpoints.down('sm')]:{
            border:'none'
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: theme.spacing(8),
            border:'1px solid rgba(0,0,0,0.12)',
            borderRadius: '7px',
        },
    },
    root:{
        [theme.breakpoints.between('sm','md')]:{
            width:'450px'
        },
        [theme.breakpoints.up('md')]:{
            width:'750px'
        },
    }

  });