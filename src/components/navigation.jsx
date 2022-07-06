import { Outlet, Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Vehicle Solution
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              {/* <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li> */}
              <li role="presentation" class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <Link target="_blank" to="/swap-deal">
                      Swap Deal
                    </Link>
                    {/* <a target="_blank" class="nav-link" href="swap-deal">
                      Swap Deal
                    </a> */}
                  </li>
                  <li class="nav-item">
                    <Link target="_blank" to="/test-run">
                      Test Run
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link target="_blank" to="/Inquiry">
                      Inquiry
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#vehicles" className="page-scroll">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Our Staff
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
