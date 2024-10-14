import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../axios";

const Register = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	// Functions
	const onSubmit = async (data) => {
		console.log(data);
		try {
			const newUser = await api.post("/auth/sign_up", { ...data });

			console.log(newUser.data);

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

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
							Welcome to{" "}
							<span className="text-blue-600">Binazrin</span>
						</p>
						<p className="text-lg mt-5 text-gray-500">
							We make it easy for everyone to invest in real
							estate.
						</p>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mt-5">
								<div className="mb-4">
									<p className="text-md font-semibold mb-2">
										First Name
									</p>
									<input
										type="text"
										placeholder="First Name"
										className="input input-bordered w-full max-w-md"
										{...register("first_name", {
											required: "First Name is required",
										})}
									/>
									{errors.first_name && (
										<p className="text-red-500">
											{errors.first_name.message}
										</p>
									)}
								</div>

								<div className="mb-4">
									<p className="text-md font-semibold mb-2">
										Last Name
									</p>
									<input
										type="text"
										placeholder="Last Name"
										className="input input-bordered w-full max-w-md"
										{...register("last_name", {
											required: "Last Name is required",
										})}
									/>
									{errors.last_name && (
										<p className="text-red-500">
											{errors.last_name.message}
										</p>
									)}
								</div>

								<div className="mb-4">
									<p className="text-md font-semibold mb-2">
										Email
									</p>
									<input
										type="text"
										placeholder="example@gmail.com"
										className="input input-bordered w-full max-w-md"
										{...register("email", {
											required: "Email is required",
											pattern: {
												value: /^\S+@\S+$/i,
												message:
													"Invalid email address",
											},
										})}
									/>
									{errors.email && (
										<p className="text-red-500">
											{errors.email.message}
										</p>
									)}
								</div>

								<div className="mb-4">
									<p className="text-md font-semibold mb-2">
										Password
									</p>
									<input
										type="password"
										placeholder="Password"
										className="input input-bordered w-full max-w-md"
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 6,
												message:
													"Password must be at least 6 characters long",
											},
										})}
									/>
									{errors.password && (
										<p className="text-red-500">
											{errors.password.message}
										</p>
									)}
								</div>

								<div className="mb-10">
									<p className="text-md font-semibold mb-2">
										Confirm Password
									</p>
									<input
										type="password"
										placeholder="Confirm Password"
										className="input input-bordered w-full max-w-md"
										{...register("con_password", {
											required:
												"Please confirm your password",
											validate: (value) =>
												value === watch("password") ||
												"Passwords do not match",
										})}
									/>
									{errors.con_password && (
										<p className="text-red-500">
											{errors.con_password.message}
										</p>
									)}
								</div>

								<div className="flex">
									<button
										type="submit"
										className="btn flex-1 mr-2 bg-blue-600 text-white"
										value="Register"
									>
										Register
									</button>
									<button className="btn flex-1 bg-white shadow-sm text-blue-600">
										Cancel
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

export default Register;
