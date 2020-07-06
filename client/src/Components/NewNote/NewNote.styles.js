export default theme => ({
    card: {
        position: 'relative',
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
        borderRadius: '6px',
        border: '1px solid #e0e0e0'
    },
    cardContainer: {
        [theme.breakpoints.up('sm')]: {
            margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        },
        margin: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
        display: 'flex',
        justifyContent: 'center'
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
        padding: `12px ${theme.spacing(2)}px 6px ${theme.spacing(2)}px`,
        width: '80%'

    },
    textContainerWidthxL: {
        width: '90%'
    }
})