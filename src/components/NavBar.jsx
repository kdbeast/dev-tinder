import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> 👨🏻‍💻 DevTinder</a>
      </div>
      {user && (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-5 flex items-center">
            <p className="px-4">Welcome, K.D Beast</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-40 w-52 p-2 shadow border border-white"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => navigate("/login")}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
