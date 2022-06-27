import { NavLink } from 'react-router-dom'

import './style.scss'

const NavLinkCustom = (props) => {
  return (
    <NavLink
      to={props.to || '/'}
      className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
    >
      {props.children}
    </NavLink>
  )
}

export default NavLinkCustom
