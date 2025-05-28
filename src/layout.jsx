import { Outlet } from "react-router";
import NavBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";




const Layout = () => {
  

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
