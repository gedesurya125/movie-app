import { AppBar, Container, Avatar, CssBaseline, makeStyles, Toolbar, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getMovie } from "./Redux/Actions/movieActions";
import { getNowPlayingMovie } from "./Redux/API/tmdbAPI";
import ImageCarousel from "./Components/ImageCarousel";

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: 'auto',
  },
  container: {
    display: 'flex'
  }
}))


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  // console.log(movies);

  useEffect(() => {
    dispatch(getMovie(5, getNowPlayingMovie));

  }, [dispatch])

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="md" className={classes.container}>
            <Avatar className={classes.avatar}>GS</Avatar>
            <Button color="inherit">Login</Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <ImageCarousel/>
      </Container>
    </div>
  )
}

export default App;