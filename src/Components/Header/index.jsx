import { createStyles, Group, Header, Navbar } from "@mantine/core";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/Auth";

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
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('isLoggedIn', isLoggedIn);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
    event.target.reset();
  }

  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Group>
          <Link className={classes.link} to="/" default>Home</Link>
          <Link className={classes.link} to="/settings">Settings</Link>
        </Group>
        <Group>
          <form onSubmit={handleSubmit}>
            <label>
              username:
              <input onChange ={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              password:
              <input onChange = {(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
          </form>
          <button onClick={logout}>Logout</button>
        </Group>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;