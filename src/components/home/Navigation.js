import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    position: 'sticky',
    bottom: '0',
    width: '100%',
  },
  icon: {
    margin: '0',
    padding: '0',
    height: '100%'
  },
  done: {
    color: 'black',
    height: '100%',
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.icon} component={Link} to="/add" icon={<Icon fontSize="large" color="action">
        add_circle
      </Icon>} />
    </BottomNavigation>
  );
}