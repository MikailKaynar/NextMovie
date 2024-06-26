const fetchMovieApi = async (pathname, querry = "") => {
  try {
    const res = await fetch(
      `${process.env.API_URL}${pathname}?api_key=${process.env.API_KEY}&${querry}`
    );
    
    return res.json();
  } catch (error) {
    throw new Error(error)
  }
};
const getMovieDetail = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("discover/movie", `with_genres=${genreId}`);
};
const getCategories = async () => {
  return fetchMovieApi("genre/movie/list", `&page=1`);
};
const getPopularMovies = async () => {
  return fetchMovieApi("movie/popular", `&page=1`);
};
const getTopRatedMovies = async () => {
  return fetchMovieApi("movie/top_rated", `&page=1`);
};
export {
  getMovieDetail,
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
};
