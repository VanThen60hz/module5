import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link btn btn-light" to={`/user/add`}>
                  Trang Thêm mới
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-light" to={`/hello`}>
                  Trang Hello
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
