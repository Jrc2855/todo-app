import { createStyles, Group, Header, Navbar } from "@mantine/core";
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.green[8],
    color: theme.colors.gray[0],
    height: '100%',
    width: '100%'
  }
}))

const HeaderComponent = () => {
  const { classes } = useStyles();
  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Group>
          <Link className={classes.link} to="/" default>Home</Link>
          <Link className={classes.link} to="/settings">Settings</Link>
        </Group>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;