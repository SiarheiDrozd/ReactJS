import './delete-movie.scss';
import DeleteMovie from './delete-movie';

export default {
  title: 'Forms/Delete-movie',
  component: DeleteMovie
};

const Template = (args) => <DeleteMovie {...args} />;

export const deleteMovie = Template.bind({});
deleteMovie.args = {
  onDelete: () => {}
};
