import Input from "./input";

export default {
    title: 'Components/Input',
    component: Input
}

const Template = (args) => <Input {...args}/>;

export const input = Template.bind({});
input.args = {
    placeholder: 'placeholder text'
}
