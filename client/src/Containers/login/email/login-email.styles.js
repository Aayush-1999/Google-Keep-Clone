export default theme=>({
    root:{
        paddingLeft:'0px',
        paddingRight:'0px'
    },
    paper: {
        [theme.breakpoints.down('sm')]:{
            border:'none'
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: theme.spacing(8),
            border:'1px solid rgba(0,0,0,0.12)',
            borderRadius: '7px',
        } 
    },
    cardBody:{
        padding: theme.spacing(3),
    },
    avatar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    cardContent:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center'
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
    }
});