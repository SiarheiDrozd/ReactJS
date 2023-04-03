import MovieTile from './movie-tile';
import './movie-tile.scss';

export default {
  title: 'Components/MovieTile',
  component: MovieTile
};

const Template = (args) => (
  <div style={{ width: '322px', height: 'auto', backgroundColor: '#232323' }}>
    <MovieTile {...args} />
  </div>
);

export const movieTile = Template.bind({});
movieTile.args = {
  movie: {
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Bohemian_Rhapsody_soundtrack.jpg',
    imgAlt: 'Bohemian Rhapsody',
    title: 'Bohemian Rhapsody',
    year: '2003',
    genreList: ['Drama', 'Biography', 'Music']
  }
};
