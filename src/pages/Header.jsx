import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Apply the theme to the HTML element
    const html = document.querySelector("html");
    html.setAttribute("data-theme", newTheme);
  };

  return (
    <header style={{ height: "100vh" }}>
      <div className="container mx-auto ">
        {/* <!-- navbar --> */}
        <div className="navbar lg:flex-row flex-col">
          <div className="flex-1">
            <a className="">
              <img src="./icons/logo.png" className="w-4/12" alt="logo" />
            </a>
          </div>
          <div className="flex-2">
            <ul className="menu menu-horizontal px-1 font-medium  lg:grid lg:grid-row grid grid-cols-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                {theme === "light" ? (
                  <a onClick={toggleTheme}>Light</a>
                ) : (
                  <a onClick={toggleTheme}>Dark</a>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- hero --> */}
        <div className="hero block mx-auto lg:px-24 px-0">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between">
            <img src="./images/model.png" className="lg:max-w-sm max-w-full" />
            <div className=" text-left">
              <h1 className="text-5xl font-bold font-baby">
                <span className="block mb-3 text-[#FABE4C]">
                  Be the Penguins
                </span>
                of Winter
              </h1>
              <p className="py-6 w-3/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
