export default theme => ({
    card: {
        [theme.breakpoints.between('sm','md')]: {
            width: '500px'
        },
        [theme.breakpoints.up('md')]: {
            width: '600px'  
        },
        // boxShadow: 'inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07)',
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
        borderRadius: '6px'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '32px auto 16px auto'
    },
    cardContent: {
        '&:last-child': {
            paddingBottom: 0
        }, 
        padding: 0  
    },
    inputPlaceholder: {
        fontSize: '1rem',
        fontWeight: '500',
        lineHeight: '1.5rem',
        letterSpacing: '0.00625em',
        fontFamily: 'Google Sans, Roboto, Arial, sans-seriff',
        color: '#80868b'
    },
    textContainer: {
        padding: `9px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    }
})