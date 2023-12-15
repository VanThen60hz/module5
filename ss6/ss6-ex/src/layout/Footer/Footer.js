import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-5 text-white">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink href="#" className="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <NavLink className="link-dark" to="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter" />
                  </svg>
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="link-dark" to="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram" />
                  </svg>
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="link-dark" to="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook" />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
