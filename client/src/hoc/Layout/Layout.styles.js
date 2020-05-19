export default theme=>({
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
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