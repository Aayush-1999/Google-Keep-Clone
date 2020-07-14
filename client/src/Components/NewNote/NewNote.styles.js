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
    closeButton: {
        marginLeft: 'auto !important',
        marginRight: theme.spacing(2)
    },
    iconButtonRoot: {
        padding: '11px 12px'
    },
    iconSize: {
        fontSize: '1.15rem'
    },
    labelPlaceholder: {
        fontSize: '1.03rem',
        fontWeight: '500',
        lineHeight: '1.4rem',
        letterSpacing: '0.00625em',
        fontFamily: 'Google Sans, Roboto, Arial, sans-seriff',
        color: '#80868b',
    },
    paddingZero: {
        padding : 0
    },
    paddingSmall: {
        padding: '4px'
    },
    paddingMedium: {
        padding: '9px'
    },
    smallLeftMargin: {
        marginLeft: '4px'
    },
    textContainer: {
        padding: `9px ${theme.spacing(2)}px 11px ${theme.spacing(2)}px`,
        width: '80%'
    },
    textContainerWidthxL: {
        padding: `9px ${theme.spacing(2)}px 12px ${theme.spacing(2)}px`,
        width: '90%'
    },
    textPlaceholder: {
        fontSize: '0.875rem',
        fontWeight: '500',
        lineHeight: '1.4rem',
        letterSpacing: '0.00625em',
        fontFamily: 'Google Sans, Roboto, Arial, sans-seriff',
        color: '#80868b',
    },
})
