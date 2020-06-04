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
      display: 'none',
      color: '#5f6368',
      fontSize: '22px',
      fontWeight: '400',
      [theme.breakpoints.up('sm')]:{
        display:'block'
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'rgba(0,0,0,0.17)',
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        border: '1px solid transparent',
        boxShadow:'0 1px 1px 0  rgba(65,69,73,0.3), 0 1px 3px 0 rgba(65,69,73,0.15)'
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
})