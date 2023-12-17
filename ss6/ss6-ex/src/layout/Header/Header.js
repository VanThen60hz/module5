import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <NavLink className="btn navbar-brand"> Webapp</NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={`hello`} className="btn navbar-brand">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`todo-app`}
                    className="nav-link me-3 btn btn-primary"
                  >
                    TodoApp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`library`}
                    className="nav-link me-3 btn btn-primary"
                  >
                    Library
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`contact`}
                    className="nav-link me-3 btn btn-primary"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`user`}
                    className="nav-link me-3 btn btn-primary"
                  >
                    User
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={``} className="nav-link me-3 btn btn-primary">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={``} className="nav-link btn btn-primary">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    to={``}
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome
                  </NavLink>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <li>
                      <NavLink to={``} className="dropdown-item">
                        Create
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={``} className="dropdown-item">
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
