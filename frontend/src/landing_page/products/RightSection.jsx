import React from "react";

function RightSection({ productName, productDescription, productLink, productURL }) {
  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-1"></div>

        <div className="col-4">
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="mt-3" style={{ fontSize: "17px", lineHeight: "30px" }}>
            {productDescription}
          </p>
          <a href={productLink} style={{textDecoration:"none"}}>Learn more-&gt;</a>
        </div>

        <div className="col-1"></div>

        <div className="col-5">
          <img src={productURL}  alt="" className="img-fluid" />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
