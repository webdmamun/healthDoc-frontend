import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabindex="0">
        <Link to="appointment" class="justify-between">
          Appointment
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul class="p-2">
          <li>
            <Link to="/appointment">Appointment page</Link>
          </li>
          <li>
            <Link to="/about">About page</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          HealthDoc
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div class="navbar-end">
        <Link to="registration" class="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
