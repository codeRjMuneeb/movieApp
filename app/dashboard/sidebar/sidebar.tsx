import React from "react";
import Link from "next/link";

function sidebar(
    // {onChangeComponent}
    ) {
//   const handleClick = (buttonName) => {
//     // Call the function passed from the parent with the button name
//     onChangeComponent(buttonName);
//   };

  return (
    <div>
      <div className="sidebar flex flex-col justify-between  bg-gray-50 dark:bg-gray-800 w-48 h-screen ">
        <div className="menu">
          <ul>
            <li>
              
              <Link
                href="/dashboard"
               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                  stroke="currentColor"
                  stroke-width="0"
                  width="1.3em"
                >
                  <path
                    fill="none"
                    d="M8.003,15c0-1.103,0.897-2,2-2h4c1.103,0,2,0.897,2,2v5h3.001l-0.001-8.586l-7-7l-7,7V20h3V15z"
                  ></path>
                  <path fill="none" d="M10.003 15H14.003V20H10.003z"></path>
                  <path d="M5.003,22h4h6h4c1.103,0,2-0.897,2-2v-9c0-0.265-0.105-0.52-0.293-0.707l-8-8c-0.391-0.391-1.023-0.391-1.414,0l-8,8 C3.108,10.48,3.003,10.735,3.003,11v9C3.003,21.103,3.9,22,5.003,22z M10.003,20v-5h4v5H10.003z M5.003,11.414l7-7l7,7L19.004,20 h-3.001v-5c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2v5h-3V11.414z"></path>
                </svg>
                <span className="ms-3"
                >Home</span>
              </Link>
            </li>
            <li>
              <Link href="/trending"
            //   onClick={() => handleClick("Trending")}
               className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 10.414L14 14.414 19.707 8.707 22 11 22 5 16 5 18.293 7.293 14 11.586 10 7.586 2.293 15.293 3.707 16.707z"></path>
                </svg>

                <span className="ms-3 whitespace-nowrap"
                >Trending</span>
              </Link>
            </li>
            <li>
              <button 
            //   onClick={() => handleClick("Genre")}
               className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
                </svg>
                <span className="ms-3 whitespace-nowrap"
                >Genre</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="settings">
          <ul>
            <li>
              <Link href="/profile"
            //    onClick={() => handleClick("Account")}
                className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="ms-3 whitespace-nowrap"
                >Account</span>
              </Link>
            </li>
            <li>
              <Link href='/'>
              <button 
            //   onClick={() => handleClick("SignOut")} 
              className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span className="ms-3 whitespace-nowrap"
                >SignOut</span>
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
