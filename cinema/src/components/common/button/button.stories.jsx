import Button from './button';

export default {
  title: 'Components/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  text: 'Submit',
  type: 'button',
  isPrimary: true
};
