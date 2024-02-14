import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="h-screen mx-auto bg-primary">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
