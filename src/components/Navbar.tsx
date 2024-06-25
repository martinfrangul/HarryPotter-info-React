import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import banner from "../assets/img/banner.png";
import "../assets/fonts.css";

const Navbar = () => {
  const context = useContext(AuthContext);
  const { user, handleSignOut } = context;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-xl bg-stone-50 bg-opacity-60 flex justify-start lg:justify-between items-center h-56">
        <div className="w-1/4 flex lg:hidden justify-start px-4">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="w-1/3 lg:flex hidden items-center gap-2 p-5">
          <NavLink
            to="/"
            className="relative btn btn-lg px-2 py-2 text-xl text-black font-bold border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-amber-900"
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/characters"
              className="relative btn btn-lg px-4 py-2 text-xl text-black font-bold border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-amber-900"
            >
              Characters
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/spells"
              className="relative btn btn-lg px-4 py-2 text-xl text-black font-bold border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-amber-900"
            >
              Spells
            </NavLink>
          )}
        </div>
        <div className="lg:w-1/3 w-1/2 p-4 flex justify-center">
          <img src={banner} alt="banner-hp" />
        </div>
        {!user ? (
          <div className="btn-container lg:flex hidden gap-3 justify-end w-1/3 p-3">
            <NavLink
              className="btn rounded p-3 bg-yellow-200 text-black"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink to="/register" className="btn rounded p-3 bg-gray-400">
              Register
            </NavLink>
          </div>
        ) : (
          <div className="container lg:flex hidden justify-end p-5 w-1/3">
            <button
              className="btn rounded p-3 bg-red-400 text-black border-2 border-black font-bold"
              onClick={handleSignOut}
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>

      {/* Overlay con blur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menú móvil */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-stone-50 bg-opacity-85 text-left transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="p-4 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <NavLink
          to="/"
          className="block px-2 py-2 text-xl text-black font-bold border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-amber-900"
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        {user && (
          <NavLink
            to="/characters"
            className="block px-2 py-2 text-xl text-black font-bold border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-amber-900"
            onClick={toggleMenu}
          >
            Characters
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/spells"
            className="block px-2 py-2 text-xl text-black font-bold border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none focus:text-amber-900"
            onClick={toggleMenu}
          >
            Spells
          </NavLink>
        )}
        {!user ? (
          <div className="text-center flex flex-col m-auto w-11/12">
            <NavLink
              className="block rounded my-3 p-3 bg-yellow-200 text-black"
              to="/login"
              onClick={toggleMenu}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="block rounded p-3 bg-gray-400"
              onClick={toggleMenu}
            >
              Register
            </NavLink>
          </div>
        ) : (
          <button
            className="block rounded p-3 bg-red-400 text-black border-2 border-black font-bold"
            onClick={() => {
              handleSignOut();
              toggleMenu();
            }}
          >
            LOGOUT
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
