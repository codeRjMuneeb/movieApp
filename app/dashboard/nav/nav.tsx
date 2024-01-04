"use client"
import React,{useState} from "react";

function Nav() {
    const [showSearch,setShowSearch] = useState(false)
    const handleShowSearch = () =>{
        setShowSearch(!showSearch)
    }
  return (

    <>
      <div className="w-full flex justify-between relative mt-1 items-center  py-2 ">
        <div className="w-3/4 logo text-white-50 flex justify-center ml-[22%]">
          <h1>
            <b>Movies</b>
          </h1>
        </div>
        <div className="flex justify-end w-1/4">
          {showSearch &&<input
            type="text"
            id="search"
            placeholder="Search"
            className="text-gray-900 bg-gray-700 rounded-2xl absolute right-28  bottom-1.5 text-center h-8  "
          />}
          
          {/* searchIcon */}
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            // color="white"
            width="1.6em"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            onClick={handleShowSearch}
          > 
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          {/* notificationIcon */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            // color="white"
            width="1.6em"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707C3.105 15.48 3 15.734 3 16v2c0 .553.447 1 1 1h16c.553 0 1-.447 1-1v-2c0-.266-.105-.52-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707C6.895 14.52 7 14.266 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zM12 22c1.311 0 2.407-.834 2.818-2H9.182C9.593 21.166 10.689 22 12 22z"></path>
          </svg>

          {/* profile */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="mr-2"
            
            width="1.6em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              d="M12,8c-1.178,0-2,0.822-2,2s0.822,2,2,2s2-0.822,2-2S13.178,8,12,8z"
            ></path>
            <path
              fill="none"
              d="M12,4c-4.337,0-8,3.663-8,8c0,2.176,0.923,4.182,2.39,5.641c0.757-1.8,2.538-3.068,4.61-3.068h2 c2.072,0,3.854,1.269,4.61,3.068C19.077,16.182,20,14.176,20,12C20,7.663,16.337,4,12,4z M12,14c-2.28,0-4-1.72-4-4s1.72-4,4-4 s4,1.72,4,4S14.28,14,12,14z"
            ></path>
            <path
              fill="none"
              d="M13,16.572h-2c-1.432,0-2.629,1.01-2.926,2.354C9.242,19.604,10.584,20,12,20s2.758-0.396,3.926-1.073 C15.629,17.582,14.432,16.572,13,16.572z"
            ></path>
            <path d="M12,2C6.579,2,2,6.579,2,12c0,3.189,1.592,6.078,4,7.924V20h0.102C7.77,21.245,9.813,22,12,22s4.23-0.755,5.898-2H18 v-0.076c2.408-1.846,4-4.734,4-7.924C22,6.579,17.421,2,12,2z M8.074,18.927c0.297-1.345,1.494-2.354,2.926-2.354h2 c1.432,0,2.629,1.01,2.926,2.354C14.758,19.604,13.416,20,12,20S9.242,19.604,8.074,18.927z M17.61,17.641 c-0.757-1.8-2.538-3.068-4.61-3.068h-2c-2.072,0-3.854,1.269-4.61,3.068C4.923,16.182,4,14.176,4,12c0-4.337,3.663-8,8-8 s8,3.663,8,8C20,14.176,19.077,16.182,17.61,17.641z"></path>
            <path d="M12,6c-2.28,0-4,1.72-4,4s1.72,4,4,4s4-1.72,4-4S14.28,6,12,6z M12,12c-1.178,0-2-0.822-2-2s0.822-2,2-2s2,0.822,2,2 S13.178,12,12,12z"></path>
          </svg>
        </div>
        
      </div>
    </>
  );
}

export default Nav;
