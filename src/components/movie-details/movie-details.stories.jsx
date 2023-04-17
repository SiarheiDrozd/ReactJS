import MovieDetails from './movie-details';
import './movie-details.scss';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails
};

const Template = (args) => <MovieDetails {...args} />;

export const movieDetails = Template.bind({});
movieDetails.args = {
  movie: {
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Bohemian_Rhapsody_soundtrack.jpg',
    imgAlt: 'Bohemian Rhapsody',
    title: 'Bohemian Rhapsody',
    year: '2003',
    genreList: ['Drama', 'Biography', 'Music'],
    rate: '8.9',
    duration: '2h 34min',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
  }
};
