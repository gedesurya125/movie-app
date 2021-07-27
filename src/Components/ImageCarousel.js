import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux';
const useStyles = makeStyles(theme => ({
	carouselContainer:{
		marginTop: theme.spacing(2)
	},
	paperRoot: {
		display: 'flex',
		// padding: theme.spacing(1)
	},
	imageContainer:{
		// flexShrink: '1',
		'& img':{
			width: '100%'
		}
	}
}))

function Item({ movies }) {
	const classes = useStyles()
	return (
		<div className={classes.paperRoot}>
			
				{movies.map(movie => (
					<div className={classes.imageContainer}>
						<img src={`${process.env.REACT_APP_TMDB_MOVIE_IMAGE}/${movie.poster_path}`} alt="" />
					</div>
				))}
			
		</div>
	)
}


export default function ImageCarousel(props) {
	const classes = useStyles()
	const movies = useSelector(state => state.movies.results)
	// console.log(movies);
	const divideby3 = (movarray) => {
		const newArray = [];
		let insideArray = [];
		for (let i = 0; i < movarray.length; i++) {
			insideArray.push(movarray[i]);
			if (insideArray.length >= 3) {
				newArray.push(insideArray);
				insideArray = []
			}
		}
		return newArray;
	}
	const dividedMovie = movies?.length && divideby3(movies);
	console.log(dividedMovie);



	return (
		<Carousel className={classes.carouselContainer} animation="slide">
			{movies?.length && dividedMovie.map((movies) => <Item key={movies.id} movies={movies} />)}
		</Carousel>
	)
}
