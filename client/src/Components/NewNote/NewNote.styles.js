export default theme => ({
    card: {
        [theme.breakpoints.between('sm','md')]: {
            width: '500px'
        },
        [theme.breakpoints.up('md')]: {
            width: '600px'  
        },
        
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
        borderRadius: '6px'
    },
    cardContainer: {
        margin: '32px auto 16px auto',
        position: 'relative',
        justifyContent: 'center'
    },
    cardContent: {
        padding: 0
    }
})