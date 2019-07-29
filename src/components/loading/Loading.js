import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div style={{ padding: "100px 0" }} className="m-auto">
          <img
            style={{ height: "200px", width: "200px" }}
            src="/assets/loading.gif"
            alt="Loading"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
