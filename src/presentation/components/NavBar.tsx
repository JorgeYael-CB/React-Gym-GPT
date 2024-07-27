import { NavLink } from "react-router-dom";
import { RouterInterface } from "../../interface";


interface Props {
  routes: RouterInterface[]
}

export const NavBar = ( {routes}:Props ) => {
  return (
    <>
      <div className="flex justify-around py-3 bg-black">
        <nav className="flex gap-6">
          {
            routes.map( r => (
              <NavLink
                className={ (active) => `font-semibold rounded-sm transition-colors px-3 py-1 text-base ${ active.isActive ? 'bg-white text-black' : 'text-white' }` } to={r.route}>{r.title}
              </NavLink>
            ))
          }
        </nav>

        <nav className="flex gap-3">
          <NavLink
            className={ (active) => `font-semibold rounded-sm transition-colors px-3 py-1 text-base ${ active.isActive ? 'bg-white text-black' : 'text-white' }` } to='/auth/login'>Login</NavLink>
          <NavLink
            className={ (active) => `font-semibold rounded-sm transition-colors px-3 py-1 text-base ${ active.isActive ? 'bg-white text-black' : 'text-white' }` } to='/auth/register'>Register</NavLink>
        </nav>
      </div>
    </>
  )
}
