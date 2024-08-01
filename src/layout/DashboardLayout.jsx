import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardNavmbar from "../components/DashboardNavmbar";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { logOut } = useAuth();

  const location = useLocation();

  const links = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/dashboard/transactions-history",
      name: "Transactions History",
    },
  ];

  return (
    <div>
      <DashboardNavmbar />

      {/* main content */}
      <div className="ml-auto  lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-white h-full lg:min-h-screen">
        {/* top menu */}
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
            </h5>
            <button
              onClick={() => setIsOpenNav(!isOpenNav)}
              className="w-12 h-16 -mr-2 border-r lg:hidden relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div
              className={`border absolute top-full left-0 mt-2 bg-white lg:hidden ${
                isOpenNav ? "block" : "hidden"
              }`}
            >
              <ul className="p-2 space-y-2">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      className={`${
                        item.path === location.pathname
                          ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                          : " "
                      } hover:bg-gradient-to-r block text-gray-600 font-semibold cursor-pointer from-sky-600  to-cyan-400 px-5 py-3 hover:text-white`}
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="w-2/3 mx-auto mb-2 mt-2" />

              <div className="p-2">
                <button
                  onClick={logOut}
                  className="btn btn-warning w-full rounded-none"
                >
                  Log Out
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <div hidden className="md:block  ">
                <div className="relative flex items-center  text-gray-400  focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center  pr-3 border-r border-gray-300">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full bg-white pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  />
                </div>
              </div>

              <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
