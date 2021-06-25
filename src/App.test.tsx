import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { axe, toHaveNoViolations } from 'jest-axe';
// @ts-ignore
import App from './App.tsx';

expect.extend(toHaveNoViolations);

describe('<App />', () => {
  it('should render without any a11y violations', async () => {
    const { baseElement } = render(<App />);
    const results = await axe(baseElement);

    expect(results).toHaveNoViolations();
  });
});
