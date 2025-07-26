import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 ">
        <div className="col-1"></div>
        <div className="col-5">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-4 mt-5">
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="mt-3" style={{fontSize:"17px",lineHeight:"30px"}}>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }} className="p-2 me-4">
              Try demo ->
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more ->
            </a>
          </div>
          <div className="mt-4 ">
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg"></img>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;
