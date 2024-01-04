"use client";
import React, { useState } from "react";
import Nav from "./nav/nav";
import Sidebar from "./sidebar/sidebar";
import Home from "../home/page";
// import Home from "../home/home"; 
// import Trending from "../trendings/page";  
// import Genre from "../genre/page";
// import Account from "../account/page";
// import SignOut from "../signout/page";
// import Recommendation from "./recommendation/recommendation";
// import Home from "../home/home";

const Dashboard: React.FC = () => {
  // const [activeComponent, setActiveComponent] = useState(<Home />);

//   const handleChangeComponent = (componentName: string) => {
//     switch (componentName) {
//       case "Home":
//         setActiveComponent(<Home />);
//         break;
//       case "Trending":
//         setActiveComponent(<Trending />);
//         break;
//       case "Genre":
//         setActiveComponent(<Genre />);
//         break;
//       case "Account":
//         setActiveComponent(<Account />);
//         break;
//       case "SignOut":
//         setActiveComponent(<SignOut />);
//         break;
//       default:
//         // Default to Home component
//         setActiveComponent(<Home />);
//         break;
//     } 
//   };

  return (
    <div className="dark:bg-gray-800">
      <Nav />
      <div className="flex border-t-2 border-t-gray-700">
        <div className="border-r-2 border-r-gray-700"><Sidebar/>
        {/* //  onChangeComponent={handleChangeComponent} */}
        </div>
        
        <div className="relative"><Home/></div>
        {/* <Recommendation/> */}
      </div>
      
    </div>
  );
};

export default Dashboard;
