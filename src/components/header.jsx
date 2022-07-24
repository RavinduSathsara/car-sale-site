export const Header = (props) => {
  return (
    <div>
      <h2>Carousel Example</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <div className="carousel-caption">
              <h1>GET YOUR DREAM VEHICLE</h1>
              <p>
                Choose your dream vehicle according to your own requirements
                from us.
              </p>
            </div>
            <img
              src="../img/c.jpg"
              alt="Los Angeles"
              style={{ height: "700px", width: "100%" }}
            />
          </div>

          <div className="item">
            <div className="carousel-caption">
              <h1>GET YOUR DREAM VEHICLE</h1>

              <p>
                Choose your dream vehicle according to your own requirements
                from us.
              </p>
            </div>
            <img
              src="../img/intro-bg.jpg"
              alt="Chicago"
              style={{ height: "700px", width: "100%" }}
            />
          </div>

          <div className="item">
            <div className="carousel-caption">
              <h1>GET YOUR DREAM VEHICLE</h1>
              <p>
                Choose your dream vehicle according to your own requirements
                from us.
              </p>
            </div>
            <img
              src="../img/b.jpg"
              alt="New york"
              style={{ height: "700px", width: "100%" }}
            />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
