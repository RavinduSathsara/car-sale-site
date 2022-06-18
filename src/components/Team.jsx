import useFetch from "../hooks/useFetch";

export const Team = (props) => {
  const { data, isLoading } = useFetch("http://127.0.0.1:8000/api/staff");

  console.log(data?.staff);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet our Staff</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {data?.staff
            ? data?.staff.slice(0, 4).map((d) => (
                <div key={d.id} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img
                      style={{ height: 240 }}
                      src={`http://127.0.0.1:8000/storage/${d.image}`}
                      alt="..."
                      className="team-img"
                    />
                    <div className="caption">
                      <h4>
                        {d.first_name} {d.last_name}
                      </h4>
                      <p>{d.position}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
