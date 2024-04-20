import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10pt",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/main">main</Link>
      </div>
      <Outlet />
    </>
  );
}
