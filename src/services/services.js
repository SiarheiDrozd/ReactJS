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
const getMovies = () => {
  return fetchData('http://localhost:4000/movies');
};
const searchMovies = (query) => {
  return fetchData(`http://localhost:4000/movies?search=${query}&searchBy=title`);
};
const sortMovies = async (criteria, order = 'asc') => {
  return await fetchData(`http://localhost:4000/movies?sortBy=${criteria}&sortOrder=${order}`);
};

export { getMovies, searchMovies, sortMovies };
