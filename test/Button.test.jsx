import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Button from '../src/components/Button';

test('render correct label', () => {
    render(<Button label="Click Me!" />);
    expect(screen.getByText(/Click Me!/i)).toBeDefined();
});