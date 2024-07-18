import Taka from "/assets/images/taka.png";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { setCurrentUser, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailOrPhone = e.target.emailOrPhone.value;
    const pin = e.target.pin.value;

    const loginData = { emailOrPhone, pin };

    console.table(loginData);

    try {
      const { data } = await axiosPublic.post("/user", loginData);
      if (data) {
        setCurrentUser(data);
        navigate("/dashboard");
        toast.success("successfully login");
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        toast.error("login failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("login failed");
    }
  };

  return (
    <div className="flex h-screen w-full items-center bg-[url(https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80)] justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-6 pt-2 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src={Taka} width="150" alt="" />
            <h1 className="mb-2 text-2xl merienda-800">{`${
              currentUser ? currentUser.name : "Taka.com"
            }`}</h1>
            <span className="text-gray-300 text-sm">
              Don't have an account yet?{" "}
              <Link
                className="text-[#F59108] font-bold underline"
                to="/registration"
              >
                Register
              </Link>
            </span>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                required
                className="rounded-3xl w-full border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
              />
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

export default Login;
