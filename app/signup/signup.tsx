import Link from "next/link";
import React from "react";

const signUp = () => {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-scroll z-10">
    //   <div className="bg-gray-900 opacity-100 p-8 shadow-md rounded-md w-96">
    <div>
      {/* <h2 className="text-2xl text-gray-50  font-semibold mb-3">
          <b>Sign Up</b>
        </h2> */}
      <div className="text-gray-700 mb-7">
        Get Sign Up to access your account
      </div>

      <form>
        {/* username */}

        <div className="mb-4 flex mr-1">
          <input
            type="text"
            id="first_name"
            name="FirstName"
            placeholder="First Name"
            className="mt-1 p-2 w-full  rounded-md bg-gray-700 outline-none text-gray-50 "
          />
          <div className="flex items-center  ml-[-28px] pt-1 pl-1">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="#1e293b"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>{" "}
          </div>
        </div>

        {/* email */}
        <div className="mb-4 flex">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Here"
            className="mt-1 p-2 w-full  rounded-md bg-gray-700 outline-none text-gray-50 "
          />
          <div className="flex items-center  ml-[-30px] pt-1">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#1e293b"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        {/* password */}
        <div className="mb-4 flex">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="mt-1 p-2 w-full  rounded-md bg-gray-700 outline-none text-gray-50"
          />
          <div className="flex item-center ml-[-30px] pt-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              color="#1e293b"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815zm3.328 6.884a1.5 1.5 0 10-1.06-.011.5.5 0 00-.044.136l-.333 2a.5.5 0 00.493.582h.835a.5.5 0 00.493-.585l-.347-2a.5.5 0 00-.037-.122z"
                clipPath="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/* confirm */}
        <div className="mb-4 flex">
          <input
            type="password"
            id="con_password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="mt-1 p-2 w-full  rounded-md bg-gray-700 outline-none text-gray-50"
          />
          <div className="flex item-center ml-[-30px] pt-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              color="#1e293b"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815zm3.328 6.884a1.5 1.5 0 10-1.06-.011.5.5 0 00-.044.136l-.333 2a.5.5 0 00.493.582h.835a.5.5 0 00.493-.585l-.347-2a.5.5 0 00-.037-.122z"
                clipPath="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/* Cell number */}
        <div className="mb-4 flex">
          <input
            type="text"
            id="cell_number"
            name="cell_number"
            placeholder="Cell Number"
            className="mt-1 p-2 w-full  rounded-md bg-gray-700 outline-none text-gray-50"
          />
          <div className="flex item-center ml-[-30px] pt-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              color="#1e293b"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M721.7 184.9L610.9 295.8l120.8 120.7-8 21.6A481.29 481.29 0 0 1 438 723.9l-21.6 8-.9-.9-119.8-120-110.8 110.9 104.5 104.5c10.8 10.7 26 15.7 40.8 13.2 117.9-19.5 235.4-82.9 330.9-178.4s158.9-213.1 178.4-331c2.5-14.8-2.5-30-13.3-40.8L721.7 184.9z"></path>
              <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
            </svg>
          </div>
        </div>

        {/* refferal */}

        <div className="mb-4 flex">
          <input
            type="text"
            id="refferal"
            name="refferal"
            placeholder="Refferal"
            className="mt-1 p-2 w-full  rounded-md bg-gray-700 outline-none text-gray-50"
          />
          <div className="flex item-center ml-[-30px] pt-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              color="#1e293b"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z"></path>
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href='/subscription'>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mt-2 bg-contain rounded-3xl px-8 hover:bg-blue-600 flex-col justify-center"
          >
            Sign Up
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default signUp;
