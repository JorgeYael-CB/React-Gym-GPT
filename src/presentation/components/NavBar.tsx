import { NavLink } from "react-router-dom";
import { RouterInterface } from "../../interface";


interface Props {
  routes: RouterInterface[]
}

export const NavBar = ( {routes}:Props ) => {
  return (
    <>
      <div className="flex justify-around py-4 bg-black">
        <nav className="flex gap-4">
          {
            routes.map( r => (
              <NavLink
                className={ (active) => `font-semibold text-base ${ active.isActive ? 'text-white underline' : 'text-gray-300' }` } to={r.route}>{r.title}
              </NavLink>
            ))
          }
        </nav>

        <nav className="flex gap-3">
          <NavLink
            className={ (active) => `font-semibold text-base ${ active.isActive ? 'text-white underline' : 'text-gray-300' }` } to='/auth/login'>Login</NavLink>
          <NavLink
            className={ (active) => `font-semibold text-base ${ active.isActive ? 'text-white underline' : 'text-gray-300' }` } to='/auth/register'>Register</NavLink>
        </nav>
      </div>
    </>
  )
}
