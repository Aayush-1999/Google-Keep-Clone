const drawerWidth = 280;

export default theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      borderRight: 'none'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      borderRight: 'none'
    },
    listItem: {
      borderRadius: '0 25px 25px 0',
      paddingLeft: '24px',
      lineHeight: '24px',
      '&$selected':{
        backgroundColor: '#feefc3'
      }
    },
    listText: {
      letterSpacing: '0.25px',
      color: 'rgb(32,33,36)'
    },
    selected: {}
});