import React from "react";
function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3 mt-5 mb-4">Free and open market education</h1>
          <p>
            Varsity, the larget online stock market education book in the world
            covering everything from the basics to advance trading.
          </p>
          <a href=" " style={{ textDecoration: "none" }}>
            Versity ->
          </a>

          <p className="mt-4">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href=" " style={{ textDecoration: "none" }}>
            TradingQ&A
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
