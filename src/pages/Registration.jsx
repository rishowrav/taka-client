import React from "react";
import Taka from "/assets/images/taka.png";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex h-screen w-full items-center bg-[url(https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80)] justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 pt-0 pb-4 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src={Taka} width="150" alt="" srcset="" />
            <h1 className="mb-2 text-2xl">Taka.com</h1>
            <span className="text-gray-300 text-sm">
              Already have an account!{" "}
              <Link className="text-[#F59108] font-bold underline" to="/">
                Login
              </Link>
            </span>
          </div>

          <form action="#">
            {/* Name input */}
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>

            {/* Email input */}
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="email"
                placeholder="Email Address"
              />
            </div>

            {/* Phone Number input */}
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            {/* Status input */}
            <div className="mb-4 text-lg">
              <select
                name="role"
                className="select text-lg select-bordered w-full  rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              >
                <option
                  disabled
                  selected
                  className="bg-[#A78A28] text-slate-200 hover:bg-[#F9AF46]"
                >
                  Role
                </option>
                <option className="bg-[#A78A28] hover:bg-[#F9AF46]">
                  User
                </option>
                <option className="bg-[#A78A28] hover:bg-[#F9AF46]">
                  Agent
                </option>
              </select>
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="pin"
                placeholder="PIN"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
