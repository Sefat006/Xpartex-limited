import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar z-10 bg-white/10 bg-opacity-30 fixed backdrop:blur-4xl top-0 left-0 right-0 shadow-sm">
            <div className="w-300 mx-auto flex">
            <div className="flex-1">
              <Link to='/' className="btn btn-primary text-xl">Xpartex Ltd</Link>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Img"
                      src="https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;