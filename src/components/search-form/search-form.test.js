import { fireEvent, render } from '@testing-library/react';
import SearchForm from './search-form';
import { configure } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import '@testing-library/jest-dom';

configure({ testIdAttribute: 'id' });
describe('1. Search-form component', () => {
  beforeEach(() => {});
  test('1.1 should render initial value', () => {
    const element = render(<SearchForm initialQuery={'dummy text'} />);
    const input = element.getByRole('textbox');

    expect(input).toHaveValue('dummy text');
  });
  test('1.2 should trigger search on button click', () => {
    const onChange = jest.fn();
    const element = render(<SearchForm onSearch={onChange} />);
    const input = element.getByRole('textbox');
    const searchButton = element.getByRole('button');

    fireEvent.change(input, { target: { value: 'search query' } });
    fireEvent.click(searchButton);

    expect(input).toHaveValue('search query');
    expect(onChange).toHaveBeenCalledWith('search query');
  });
  test('1.3 should trigger search on submit action', () => {
    const onChange = jest.fn();
    const element = render(<SearchForm onSearch={onChange} />);
    const input = element.getByRole('textbox');

    userEvent.type(input, 'search query{enter}');

    expect(input).toHaveValue('search query');
    expect(onChange).toHaveBeenCalledWith('search query');
  });
});
