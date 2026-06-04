// CustomButton.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomButton } from './index';

describe('CustomButton', () => {
  it('renders the button with the correct text', () => {
    const buttonText = 'Click me';
    render(<CustomButton>{buttonText}</CustomButton>);

    expect(screen.getByRole('button', { name: buttonText })).toBeInTheDocument();
  });

  it('passes additional props to the button element', () => {
    const testId = 'custom-button';
    render(<CustomButton data-testid={testId}>Submit</CustomButton>);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Submit</CustomButton>);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

  });
});
