import { render, screen } from '@testing-library/react';
import Counter from '../counter';

describe('Counter component', () => {
  beforeEach(() => {});
  test('should render default value', () => {
    const component = render(<Counter />);
    const counterValueElement = component.getByTestId('counter');
    expect(counterValueElement).toEqual(0);
  });
  test('should render initial value', () => {
    render(<Counter value={5} />);
    const counterValueElement = screen.getByTestId('counter');
    expect(counterValueElement).toEqual(5);
  });
  test('should increase value', () => {});
  test('should decrease value', () => {});
});
