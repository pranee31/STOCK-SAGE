import React from "react";
function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-1 border-top">
          <h1 className=" text-center ">People</h1>
        </div>

        <div
          className="row  p-5 fs-6"
          style={{ lineHeight: "1.8" }}
        >
          <div className="col-1"></div>
          <div className="col-5 text-center">
            <img
              src="media/images/nithinkamath.jpg"
              alt="nithin-kamath"
              style={{ borderRadius: "50%", width: "60%" }}
              className="text-center"
            />
            <h4 className="text-center mt-3">Nithin Kamath</h4>
            <p className="text-center text-muted mt-2">Founder, CEO</p>
          </div>
          <div className="col-5 mt-3">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
