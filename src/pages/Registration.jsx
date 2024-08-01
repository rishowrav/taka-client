import React, { useState } from "react";
import Taka from "/assets/images/taka.png";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const { setCurrentUser, currentUser } = useAuth();
  const navigate = useNavigate();
  const [rLoading, setRLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const role = e.target.role.value;
    const pin = e.target.pin.value;

    const registerData = { name, email, phone, role, pin, status: "pending" };

    try {
      const { data } = await axiosPublic.post("/users", registerData);
      if (data.insertedId) {
        console.log(data);
        setCurrentUser(registerData);

        navigate("/dashboard");
        localStorage.setItem("user", JSON.stringify(registerData));
        axiosPublic.post("/jwt", registerData);
        toast.success("Registered your Account");
        setRLoading(false);
      } else {
        toast.error("Registered Failed");
        setRLoading(false);
      }
    } catch (err) {
      console.log(err);

      toast.error("Registered Failed");
      setRLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center bg-[url(https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80)] justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 pt-0 pb-4 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src={Taka} width="150" alt="" />
            <h1 className="mb-2 text-2xl merienda-800">{`${
              currentUser ? currentUser.name : "Taka.com"
            }`}</h1>
            <span className="text-gray-300 text-sm">
              Already have an account!{" "}
              <Link className="text-[#F59108] font-bold underline" to="/">
                Login
              </Link>
            </span>
          </div>

          <form action="#" onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="mb-4 text-lg">
              <input
                required
                className="rounded-3xl w-full border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>

            {/* Email input */}
            <div className="mb-4 text-lg">
              <input
                required
                className="rounded-3xl w-full border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="email"
                placeholder="Email Address"
              />
            </div>

            {/* Phone Number input */}
            <div className="mb-4 text-lg">
              <input
                required
                className="rounded-3xl w-full border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            {/* Status input */}
            <div className="mb-4 text-lg">
              <select
                required
                defaultValue={"select role"}
                name="role"
                className="select text-lg select-bordered w-full  rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              >
                <option
                  disabled
                  value="select role"
                  className="bg-[#A78A28] text-slate-200 hover:bg-[#F9AF46]"
                >
                  Select Role
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
                required
                className="rounded-3xl w-full border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="pin"
                placeholder="PIN"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                disabled={rLoading}
                type="submit"
                className="rounded-3xl disabled:bg-gray-700 disabled:text-black bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                {`${rLoading ? "loading.." : "Register"}  `}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
