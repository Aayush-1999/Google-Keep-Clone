export default theme => ({
    accountOptions: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0,0,0,0.15)'
    },
    grow: {
      flexGrow: 1,
    },
    keepLogo:{
      height: '40px',
      width: '40px',
      marginRight : theme.spacing(1)
    },
    menuButton: {
      marginRight: '4px',
      color: '#5f6368'
    },
    title: {
      color: '#5f6368',
      fontSize: '22px',
      fontWeight: '400',
      [theme.breakpoints.up('sm')]:{
        width: theme.spacing(10),
        marginRight: theme.spacing(4)
      }
    },
    search: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(2),
        // padding: '11px 0',
        width: '58%',
        height: '47px',
        position: 'relative',
        borderRadius: theme.spacing(1),
        backgroundColor: '#f1f3f4',
        '&:focusVisible': {
          backgroundColor: theme.palette.common.white,
          border: '1px solid transparent',
          boxShadow:'0 1px 1px 0  rgba(65,69,73,0.3), 0 1px 3px 0 rgba(65,69,73,0.15)'
        },
        zIndex: '1'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%'
    },
})