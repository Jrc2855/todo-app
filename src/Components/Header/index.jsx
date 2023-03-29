import { createStyles, Header, Navbar, Text } from "@mantine/core";

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
        <Text>Home</Text>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;