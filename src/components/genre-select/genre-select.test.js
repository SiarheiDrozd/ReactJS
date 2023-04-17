import { fireEvent, render } from '@testing-library/react';
import GenreSelect from './genre-select';
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';

configure({ testIdAttribute: 'id' });
describe('Genre-select component', () => {
  beforeEach(() => {});
  test('should render initial list', () => {
    const list = ['1', '2', '3'];
    const element = render(<GenreSelect list={list} />);
    const items = element.getAllByRole('listitem');
    items.map((item, index) => {
      expect(item).toHaveTextContent(index + 1);
    });
  });

  test('should highlights a selected genre passed in props', () => {
    const onChange = jest.fn();
    const list = ['1', '2', '3'];
    const element = render(<GenreSelect list={list} default={'3'} onSelect={onChange} />);
    const items = element.getAllByRole('listitem');

    expect(items[2]).toHaveClass('selected');
  });

  test('should highlights a selected genre passed in props', () => {
    const onChange = jest.fn();
    const list = ['1', '2', '3'];
    const element = render(<GenreSelect list={list} onSelect={onChange} />);
    const items = element.getAllByRole('listitem');

    fireEvent.click(items[1]);

    expect(onChange).toHaveBeenCalledWith('2');
  });
});
