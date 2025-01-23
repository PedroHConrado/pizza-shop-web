import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('Navlink', () => {
  it('should highlight the nav link when is the current page link', async () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )
    const homePage = wrapper.getByText('Home')
    const aboutPage = wrapper.getByText('About')

    expect(homePage.dataset.current).toEqual('false')
    expect(aboutPage.dataset.current).toEqual('true')
  })
})
