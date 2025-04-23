import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProfileMenu from "./ProfileMenu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };
    loadUser();

    window.addEventListener("userLoggedIn", loadUser);

    return () => {
      window.removeEventListener("userLoggedIn", loadUser);
    };
  }, []);

  const handleSearchChange = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white flex items-center justify-between px-4 py-2">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="mr-6 cursor-pointer ml-2">
          <button onClick={props.toggleMenu}>
            <MenuOutlinedIcon sx={{ fontSize: "28px" }} />
          </button>
        </div>
        <Link to="/home">
          <div className="YT-logo font-semibold text-2xl tracking-tighter">
            <YouTubeIcon sx={{ fontSize: "38px", color: "red" }} />
            <span className="hidden sm:inline ml-1">YouTube</span>
          </div>
        </Link>
        <p className="ml-1 text-xs mb-7 text-gray-700 hidden sm:block">IN</p>
      </div>

      {/* Search Section */}
      <div className="hidden md:flex flex-grow justify-center">
        <div className="flex w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow border rounded-l-full border-gray-300 py-1 px-4 shadow-inner"
            onChange={handleSearchChange}
          />
          <button className="border border-gray-300 bg-gray-100 px-6 py-1 rounded-r-full">
            <SearchOutlinedIcon />
          </button>
        </div>
        <button className="rounded-full bg-gray-100 p-3 ml-4">
          <MicOutlinedIcon />
        </button>
      </div>
      <div className="md:hidden">
        <button className="p-2">
          <SearchOutlinedIcon />
        </button>
      </div>
      {/* Icons Section */}
      <div className="flex justify-end space-x-4 mr-4">
        <button className="hidden md:flex items-center bg-gray-200 px-4 py-1.5 rounded-full font-semibold mr-4">
          <AddOutlinedIcon sx={{ fontSize: 24 }} className="mr-1 mb-0.5" />
          Create
        </button>
        <button>
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }} />
        </button>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden sm:block font-medium">
                Hi, {user.username}
              </span>
              <ProfileMenu />
            </>
          ) : (
            <Link to="/signin">
              <button className="flex items-center border border-gray-200 px-4 py-1.5 rounded-full font-semibold">
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: 30 }}
                  className="text-blue-700 mr-2"
                />
                <p className="text-blue-700 hidden sm:inline">Sign in</p>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
