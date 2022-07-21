export const Services = (props) => {
  return (
    <div id="services" className="text-center text-block">
      <div className="container text-upper">
        <div className="section-title">
          <h2>Our Services</h2>
          <p></p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {/* <a href="" target="_blank" to="/swap-deal">
                      Swap Deal
                      {d.link}
                    </a> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
