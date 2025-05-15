import React from "react";
import { OrbitProgress } from "react-loading-indicators";

function Loader() {
  return (
    <OrbitProgress
      variant="spokes"
      dense
      color="#32cd32"
      size="medium"
      text=""
      textColor=""
    />
  );
}

export default Loader;
