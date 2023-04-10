import Input from './input';

export default {
  title: 'Components/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  placeholder: 'placeholder text'
};
export const select = Template.bind({});
select.args = {
  type: 'select',
  label: 'label',
  options: ['genre', 'comedy', 'horror'],
  isMultiple: true,
  placeholder: 'placeholder text'
};
export const date = Template.bind({});
date.args = {
  type: 'date',
  label: 'label',
  placeholder: 'placeholder text'
};
export const textBox = Template.bind({});
textBox.args = {
  type: 'text-box',
  label: 'label',
  placeholder: 'placeholder text'
};
