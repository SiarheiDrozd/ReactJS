const fetchData = (url) => {
  return fetch(url)
    .then((r) => r.json())
    .then(
      (result) => {
        return result.data;
      },
      (error) => {
        console.log(error);
      }
    );
};

const getMovieById = async ({ params }) => {
  const moviesList = await getMovies();

  return moviesList.find((item) => item.id.toString() === params.movieId) || null;
};
const getMovies = () => {
  return fetchData('http://localhost:4000/movies');
};
const searchMoviesByTitle = (query) => {
  return fetchData(`http://localhost:4000/movies?search=${query}&searchBy=title`);
};
const searchMoviesByGenre = (genre) => {
  return fetchData(`http://localhost:4000/movies?search=${genre}&searchBy=genres`);
};
const sortMovies = async (criteria, order = 'asc') => {
  return await fetchData(`http://localhost:4000/movies?sortBy=${criteria}&sortOrder=${order}`);
};

export { getMovies, searchMoviesByTitle, searchMoviesByGenre, sortMovies, getMovieById };
