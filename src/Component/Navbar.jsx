import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';




const items = [
  { id: 1, name: "Home", urlPath: "/home" },
  { id: 2, name: "About", urlPath: "/about" },
  { id: 3, name: "Products", urlPath: "/products" },
  { id: 4, name: "Blog", urlPath: "/blog" },
  { id: 5, name: "Contact", urlPath: "/contact" },
];




const Navbar = () => {
    const [open, setOpen ]=useState( false)
    const links = items.map((route) => (
      <li key={route.id} className="flex items-center justify-center">
        <a href={route.urlPath}>{route.name}</a>
      </li>
    ));
    return (
      <nav className="flex justify-between mx-10 text-xl">
        <span className="flex gap-2 mt-5 text-2xl font-bold" onClick={() => setOpen(!open)}>
            
          {open ? <X className="md:hidden"></X> : <Menu className="md:hidden p-3"></Menu>}
        <ul className={`md:hidden absolute ${open ? "top-13" : "-top-45"} bg-cyan-700 duration-700`}>
            {links}
        </ul>
          <h2>My Name</h2>
        </span>
        <div className="flex items-center justify-center gap-4 hidden md:flex">
          {links}
        </div>
        <button>navbar</button>
      </nav>
    );
};

export default Navbar;