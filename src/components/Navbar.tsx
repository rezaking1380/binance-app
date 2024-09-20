import { useState } from "react";
import { MdSunny } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { useTheme } from "./theme-provider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { setTheme, theme } = useTheme();
  return (
    <nav className="dark:bg-background bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          <span className="font-bold text-primary">Logo</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="dark:text-white text-background hover:text-primary dark:hover:text-primary"
          >
            Markets
          </a>
          <a
            href="#"
            className="dark:text-white text-background hover:text-primary dark:hover:text-primary"
          >
            Trade
          </a>
          <a
            href="#"
            className="dark:text-white text-background hover:text-primary dark:hover:text-primary"
          >
            Derivatives
          </a>
          <a
            href="#"
            className="dark:text-white text-background hover:text-primary dark:hover:text-primary"
          >
            More
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="bg-second text-white px-4 py-2 rounded hover:opacity-60">
            Log In
          </button>
          <button className="bg-primary text-background px-4 py-2 rounded hover:opacity-60">
            Register
          </button>
          {theme === "light" && (
            <>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded"
                onClick={() => setTheme("dark")}
              >
                <RxMoon />
              </button>
            </>
          )}
          {theme === "dark" && (
            <>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded"
                onClick={() => setTheme("light")}
              >
                <MdSunny />
              </button>
            </>
          )}
        </div>
        <button onClick={toggleMenu} className="dark:text-white text-background md:hidden">
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block dark:text-white text-background p-2">
            Markets
          </a>
          <a href="#" className="block dark:text-white text-background p-2">
            Trade
          </a>
          <a href="#" className="block dark:text-white text-background p-2">
            Derivatives
          </a>
          <a href="#" className="block dark:text-white text-background p-2">
            More
          </a>
          <button className="bg-second text-white block w-full px-4 py-2 my-2 rounded hover:opacity-60">
            Log In
          </button>
          <button className="bg-primary text-background block w-full px-4 py-2 my-2 rounded hover:opacity-60">
            Register
          </button>
          {theme === "light" && (
            <>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded"
                onClick={() => setTheme("dark")}
              >
                <RxMoon />
              </button>
            </>
          )}
          {theme === "dark" && (
            <>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded"
                onClick={() => setTheme("light")}
              >
                <MdSunny />
              </button>
            </>
          )}{" "}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
