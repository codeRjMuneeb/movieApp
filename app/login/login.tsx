"use client";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="text-gray-700 mb-2">Get login to access your account</div>

      <form>
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
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="h-4 w-4 text-indigo-600
               focus:ring-indigo-500 border-gray-300 
               rounded outline-none"
          />
          <label htmlFor="rememberMe" className="text-gray-400">
            <p>Remember Me</p>
          </label>
        </div>
        <div className="flex justify-center">
          <Link href="/dashboard"> 
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 mt-2 bg-contain rounded-3xl px-8 hover:bg-blue-600 flex-col justify-center"
            >
              Login
            </button>
          </Link>
        </div>
      </form>
      <a className="flex justify-center mt-3 text-gray-400" href="#">
        Forget Password
      </a>
    </div>
  );
};

export default Login;
