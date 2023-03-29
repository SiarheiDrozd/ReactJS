import SearchFrom from './search-form';
import './search-form.scss';

export default {
  title: 'Components/SearchForm',
  component: SearchFrom
};

const Template = (args) => <SearchFrom {...args} />;

export const SearchForm = Template.bind({});
