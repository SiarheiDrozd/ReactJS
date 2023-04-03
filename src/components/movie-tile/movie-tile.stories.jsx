import MovieTile from './movie-tile';
import './movie-tile.scss';
import image from '../../assets/images/bohemian-rhapsody.png';

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
    imgUrl: image.src,
    imgAlt: 'Bohemian Rhapsody',
    title: 'Bohemian Rhapsody',
    year: '2003',
    genreList: ['Drama', 'Biography', 'Music']
  }
};
