import React from "react";
import Lottie from "lottie-react";
import loading from "../../public/loading.json";
const Loader = () => {
  return (
    <div className="w-1/6 h-1/6">
      <Lottie
        animationData={loading}
        loop={true}
      />
    </div>
  );
};

export default Loader;
