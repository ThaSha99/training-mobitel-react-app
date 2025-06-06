const Upload = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url(/background-image-user.png)",
      }}
    >
      <div className="w-[1000px] bg-white p-20 rounded-3xl shadow-lg">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center gap-4">
            <label className="w-56 font-medium text-gray-700 gap-1 ">
              Job Title
            </label>
            <span>:</span>

            <span className="w-200 px-4 py-2">Web Development Trainee</span>
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="initials"
              className="w-56 font-medium text-gray-700"
            >
              Name with Initials
            </label>
            <span>:</span>
            <input
              type="text"
              id="initials"
              className="w-200 px-4 py-2 border rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="fullname"
              className="w-56 font-medium text-gray-700"
            >
              Full Name
            </label>
            <span>:</span>
            <input
              type="text"
              id="fullname"
              className="w-200 px-4 py-2 border rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="gender" className="w-56 font-medium text-gray-700">
              Gender
            </label>
            <span>:</span>
            <select id="gender" className="w-200 px-4 py-2 border rounded-xl">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="dob" className="w-56 font-medium text-gray-700">
              Date of Birth
            </label>
            <span>:</span>
            <input
              type="date"
              id="dob"
              className="w-200 px-4 py-2 border rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="email" className="w-56 font-medium text-gray-700">
              Email
            </label>
            <span>:</span>
            <input
              type="email"
              id="email"
              className="w-200 px-4 py-2 border rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="contact" className="w-56 font-medium text-gray-700">
              Contact Number
            </label>
            <span>:</span>
            <input
              type="tel"
              id="contact"
              className="w-200 px-4 py-2 border rounded-xl"
            />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="field" className="w-56 font-medium text-gray-700">
              Field
            </label>
            <span>:</span>
            <select id="field" className="w-200 px-4 py-2 border rounded-xl">
              <option value=""></option>
              <option value="IT">Information Technology</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Upload your CV here
            </label>
            <span>:</span>
            <div className="w-full border-2 border-dashed border-gray-400 p-6 text-center rounded-md bg-gray-50">
              <p className="text-gray-500">Drag & Drop files here</p>
              <p className="text-gray-500">or</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Browse Files
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="px-8 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
