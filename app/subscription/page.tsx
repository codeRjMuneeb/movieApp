import React from "react";
import SubNav from "./subNav";
import Packages from "./packages";

const page = () => {
  return (
    <>
      <div
        className="bg-center bg-cover absolute"
        style={{ backgroundImage: "url(/assets/background/bg.jpg)" }}
      >
        <div className="opacity-80 h-screen w-screen bg-gray-700 ">
          
        </div>
        <div className="h-screen w-screen absolute top-0 left-0">
          <div>
            <SubNav />
          </div>
          {/* <div ><Instructions/></div> */}
          <div>
            <Packages />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
