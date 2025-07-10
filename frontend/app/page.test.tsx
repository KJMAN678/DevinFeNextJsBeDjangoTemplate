import { render, screen } from '@testing-library/react';
import Page from './page';

it('renders heading', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
