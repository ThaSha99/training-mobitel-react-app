import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[90%] max-w-6xl bg-white rounded-3xl shadow-lg grid grid-cols-2 overflow-hidden">
        <div className="bg-[#F4F7FE] flex items-center justify-center">
          <img
            src="/register.png"
            alt="Login Illustration"
            className="w-[80%] h-auto object-contain"
          />
        </div>
         
        
        <div className="bg-[#0055A2] p-10 flex flex-col justify-center rounded-l-3xl">
          <h1 className="text-white text-3xl font-bold mb-5 pt-full">Register</h1>
        
                   <div className="flex items-center gap-33 rounded px-1 py-3 w-fit">
               <label htmlFor="id" className="text-white text-sm px-0.5 ">
              User&nbsp;ID:
                </label>
                
              <input
    type="text"
    id="id"
    placeholder=""
    className="px-5 py-2 w-80 rounded-full bg-white text-black focus:outline-none focus:ring-2"
  />
</div>

        
              <div className="flex items-center gap-35 rounded px-1 py-3 w-fit">
               <label htmlFor="id" className="text-white text-sm px-0.5 ">
              Name:
                </label>
              <input
    type="name"
    id="name"
    placeholder=""
    className="px-5 py-2 w-80 rounded-full bg-white text-black focus:outline-none focus:ring-2"
  />
</div>

                   <div className="flex items-center gap-30 rounded px-1 py-3 w-fit">
               <label htmlFor="id" className="text-white text-sm px-0.5 ">
              Password:
                </label>
              <input
    type="password"
    id="password"
    placeholder=""
    className="px-5 py-2 w-80 rounded-full bg-white text-black focus:outline-none focus:ring-2"
  />
</div>

                   <div className="flex items-center gap-17 rounded px-1 py-3 w-fit">
               <label htmlFor="id" className="text-white text-sm px-0.5 ">
              Confirm&nbsp;Password:
                </label>
              <input
    type="password"
    id="password"
    placeholder=""
    className="px-5 py-2 w-80 rounded-full bg-white text-black focus:outline-none focus:ring-2"
  />
</div>
          
          
          <button className="bg-white mt-10 ml-96 text-[#0055A2] font-semibold py-2 rounded-full w-30 hover:bg-blue-100 transition-colors duration-200 ">
            Submit
          </button>

         
          

        
        
      </div>
      </div>
      </div>   
  );
};

export default Signup;
