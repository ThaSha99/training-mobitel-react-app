const Login = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[90%] max-w-6xl bg-white rounded-3xl shadow-lg grid grid-cols-2 overflow-hidden">
        
        <div className="bg-[#0055A2] p-10 flex flex-col justify-center rounded-l-3xl">
          <h1 className="text-white text-3xl font-bold mb-6">Login</h1>

          
          <label htmlFor="email" className="text-white mb-1">
            Email address:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mb-4 px-4 py-2 rounded-full bg-white w-full text-black focus:outline-none focus:ring-2"
          />

          
          <label htmlFor="password" className="text-white mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="mb-6 px-4 py-2 rounded-full bg-white w-full text-black focus:outline-none focus:ring-2"
          />

          
          <button className="bg-white text-[#0055A2] font-semibold py-2 rounded-full w-full hover:bg-blue-100 transition-colors duration-200">
            Sign In
          </button>

         
          <p className="text-white text-sm mt-4 text-center">
            Don't have an account? <a href="#" className="font-semibold">SignUp</a>
          </p>

          
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-white"></div>
            <span className="mx-2 text-white text-sm font-semibold">OR</span>
            <div className="flex-grow border-t border-white"></div>
          </div>

          
          <div className="flex  gap-1 justify-center ">
            <img
              src="google.png"
              alt="Google Sign In"
              className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer hover:shadow-lg"
            />
          
          
            <img
              src="facebook.png"
              alt="Google Sign In"
              className="w-10 h-10 bg-white rounded-full p-1 cursor-pointer hover:shadow-lg"
            />
          </div>
        </div>

        
        <div className="bg-[#F4F7FE] flex items-center justify-center">
          <img
            src="/login.png"
            alt="Login Illustration"
            className="w-[80%] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
