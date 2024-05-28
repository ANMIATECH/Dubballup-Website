
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function UserLayout() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
    </div>
  );
}
