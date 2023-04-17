import SortControl from './sort-control';
import './sort-control.scss';

export default {
  title: 'Components/SortControl',
  component: SortControl
};

const Template = (args) => (
  <div
    style={{
      background: '#232323',
      width: '300px',
      height: '57px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }}
  >
    <SortControl {...args} />
  </div>
);

export const sortControl = Template.bind({});
sortControl.args = {
  options: ['release date', 'title']
};
