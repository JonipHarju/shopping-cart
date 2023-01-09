import React from "react";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div>
      <p>Frontpage</p>
      <Link className="link" to={"/shop"}>
        <h1>enter the shoppah</h1>
      </Link>
    </div>
  );
}
