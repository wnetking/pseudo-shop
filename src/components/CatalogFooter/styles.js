export const styles = theme => ({
  root : {
    position       : 'fixed',
    left           : 0,
    bottom         : 0,
    display        : 'flex',
    marginTop      : 30,
    padding        : '20px 15px',
    width          : '100%',
    backgroundColor: "#fff",
    boxSizing      : 'border-box'
  },
  btn  : {
    marginLeft: "auto"
  },
  badge: {
    margin      : `0 ${theme.spacing.unit * 2}px`,
    paddingRight: 15,
    alignSelf   : 'center'
  }
});