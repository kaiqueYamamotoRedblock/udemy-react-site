import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const LINK = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

type NavArchor = {
  path: string,
  children: ReactNode
}

function NavArchor({ path, children}: NavArchor) {
  return (
    <NavItem>
      <NavLink href={path}>
        <a> {children} </a>
      </NavLink>
    </NavItem>
  )
}

export default function Navigation() {
  const { pathname } = useRouter()

  return(
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Blog NextJS</NavbarBrand>
        <Nav className="mr-auto" navbar>
          {LINK.map(({ name, path }) => (
            <li key={path}> 
              { path === pathname
              ? <NavArchor path={path}>{name}</NavArchor> 
              : <NavArchor path={path}>{name}</NavArchor> 
              }
            </li>
          ))}
        </Nav> 
      </Navbar>
    </div>
  )
}