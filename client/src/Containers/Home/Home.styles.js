export default theme =>({
    notesContainer: {
        width: '784px',
        justifyContent: 'center',
        display: 'flex',
        margin: '0 109px',
        '@media screen and (max-width: 817px)': {
            width: '272px'
        },
        '@media screen and (max-width: 1053px)': {
            width: '528px'
        },
        // [theme.breakpoints.down('md')]:{
        //     width: '528px'
        // }
    }
})