import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 ">
      <div className="grid grid-cols-2 max-w-7xl mx-auto bg-white shadow-sm rounded-full py-0.5 px-4">
        <div className="flex gap-4 items-center">
          <img
            src="/slt_logo.png"
            alt="logo"
            className="w-30 h-12 rounded-full"
          />
          <h1 className="text-[#0055A2] font-bold">Training&nbsp;Program</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4 justify-end w-full divide-x">
            <li className="px-4 hover:text-[#0055A2]">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 hover:text-[#0055A2]">
              <Link to="/about">About&nbsp;Us</Link>
            </li>
            <li className="px-4 hover:text-[#0055A2]">
              <Link to="/vacancies">Vacancies</Link>
            </li>
            <li className="px-4 hover:text-[#0055A2]">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
