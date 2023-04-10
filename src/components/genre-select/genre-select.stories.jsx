import './genre-select.scss';
import GenreSelect from './genre-select';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect
};

const Template = (args) => <GenreSelect {...args} />;

export const genreSelect = Template.bind({});
genreSelect.args = {
  list: ['all', 'Documentary', 'Comedy', 'Horror', 'Crime']
};
