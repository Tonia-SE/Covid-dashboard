import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
    </div>
  );
};

export default Loading;
