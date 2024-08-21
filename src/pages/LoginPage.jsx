import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Functions
  const onSubmit = (data) => console.log(data);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="relative basis-3/4">
          <img
            src="/house-backgraound.jpg"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Form */}
        <div className="basis-2/4 flex justify-center items-center">
          <div>
            <p className="text-4xl font-bold">
              Welcome to <span className="text-blue-600">Binazrin</span>
            </p>
            <p className="text-lg mt-5 text-gray-500">
              We make it easy for everyone to invest in real estate.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-16">
                <div className="mb-4">
                  <p className="text-md font-semibold mb-2">Email</p>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="input input-bordered w-full max-w-md"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-10">
                  <p className="text-md font-semibold mb-2">Password</p>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-md"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  <p className="mt-1 text-end text-sm text-gray-600 cursor-pointer">
                    Forgot Password?
                  </p>
                </div>

                <div className="flex">
                  <button
                    type="submit"
                    className="flex-1 btn mr-2 bg-blue-600 text-white"
                    value="Login"
                    onClick={() => navigate("/home")}
                  >
                    Login
                  </button>

                  <button
                    className="btn flex-1 bg-white shadow-sm text-blue-600"
                    onClick={() => navigate("/register")}
                  >
                    Create Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
