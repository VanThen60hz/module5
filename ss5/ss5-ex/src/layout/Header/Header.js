import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link btn btn-light" to={`/home`}>
                  Trang Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-light" to={`/login`}>
                  Trang Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-light" to={`/library`}>
                  Trang Thư viện (library)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-light" to={`/email`}>
                  Soạn thảo email
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
