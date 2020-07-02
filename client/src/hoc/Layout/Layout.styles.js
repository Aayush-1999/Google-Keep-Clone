export default theme=>({
    content:{
        flexGrow:1,
    },
    root:{
        display:'flex'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
})