import './dialog.scss';
import Dialog from './dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog
};

const Template = (args) => <Dialog {...args} />;
export const dialog = Template.bind({});
dialog.args = {
  isVisible: true,
  header: 'header',
  body: <div>body</div>,
  onClose: () => {}
};
