export default theme => ({
    accountOptions: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0,0,0,0.15)'
    },
    closeSearchIcon: {
      float: 'right'
    },
    grow: {
      flexGrow: 1,
    },
    inputRoot: {
      color: 'inherit',
      height: '100%',
      [theme.breakpoints.up('sm')]:{
        width: '84%'
      },
      [theme.breakpoints.up('lg')]:{
        width: '92%'
      },
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1.5em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
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
    profileMenu:{
      width: '304px',
      [theme.breakpoints.up('sm')]: {
        width: '324px'
      },
      padding: 0,
    },
    profileMenuAccountIcon: {
      height: '86px',
      width: '86px',
    },
    profileMenuInfo: {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px 33px',
      alignItems: 'center'
    },
    profileMenuRadius: {
      borderRadius: theme.spacing(1)
    },
    profileUserName: {
      fontWeight: '500'
    },
    search: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(2),
        width: '58%',
        height: '47px',
        position: 'relative',
        borderRadius: theme.spacing(1),
        backgroundColor: '#f1f3f4'
      },
    },
    searchFocussed: {
      borderRadius: theme.spacing(1),
      backgroundColor: 'rgba(255,255,255,1)',
      border: '1px solid transparent',
      boxShadow:'0 1px 1px 0  rgba(65,69,73,0.3), 0 1px 3px 1px rgba(65,69,73,0.15)'
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#5f6368'
    },
    signOutButton: {
      margin: theme.spacing(1),
      justifyContent: 'center'
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
  })