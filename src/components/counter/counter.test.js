import { fireEvent, render } from '@testing-library/react';
import Counter from './counter';
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';

configure({ testIdAttribute: 'id' });
describe('Counter component', () => {
  beforeEach(() => {});
  test('should render default value', () => {
    const element = render(<Counter />);
    const counterValueElement = element.getByTestId('counter');
    expect(counterValueElement).toHaveTextContent('0');
  });
  test('should render initial value', () => {
    const element = render(<Counter value={5} />);
    const counterValueElement = element.getByTestId('counter');
    expect(counterValueElement).toHaveTextContent('5');
  });
  test('should increase value', () => {
    const element = render(<Counter value={0} />);
    const incButton = element.getByTestId('inc');
    const counterValueElement = element.getByTestId('counter');

    fireEvent.click(incButton);

    expect(counterValueElement).toHaveTextContent('1');
  });
  test('should decrease value', () => {
    const element = render(<Counter value={0} />);
    const incButton = element.getByTestId('dec');
    const counterValueElement = element.getByTestId('counter');

    fireEvent.click(incButton);

    expect(counterValueElement).toHaveTextContent('-1');
  });
});
