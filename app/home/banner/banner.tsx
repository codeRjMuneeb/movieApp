import React from "react";

function Banner() {
  return (
    <div className="pl-10%">
     
      <div style={{ 
      background: `url("/assets/Banner/banner.jpg") center/cover no-repeat`, 
      height: "250px", // Adjust the height as needed
      // border: "2px solid #ccc",
      // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      // margin: "",
      position: "relative",
      left:"30px",
      top:'20px',
      justifyContent:"center",
      display:"flex",
      // borderRadius:"5px",
      width:"80vw"
      }}>

      </div>
    </div>
  );
}

export default Banner;
