import { render, screen } from '@testing-library/react';
import Home from '@/app/(home)/page';

describe('Home', () => {
  it('renders a text', () => {
    render(<Home />);
    expect(screen.queryByText('home')).toBeInTheDocument();
  });
});
