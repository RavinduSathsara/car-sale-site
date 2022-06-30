export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {/* {props.data ? props.data.title : 'Loading'}
                  <span></span> */}
                  GET YOUR DREAM VEHICLE
                </h1>
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                <p>
                  Choose your dream vehicle according to your own requirements
                  from us.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
