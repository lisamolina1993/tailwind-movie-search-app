
import React, { useState } from "react";

function Navbar({ tab, setTab, theme, onToggleTheme }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    function selectTab(value) {
        setTab(value);
        setIsMenuOpen(false)
    }

  return (
    <nav className="w-full border-b border-black/10 dark:border-white/20 bg-white dark:bg-black/20
      backdrop-blur-lg">
      <div className=" max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between ">
        <span className="text-black dark:text-white text-xl tracking-tight font-semibold">
          Movie
          <span className="text-brand-500">Find</span>
        </span>
        <div className="hidden md:flex items-center gap-4 ">
          <button
            className={`cursor-pointer text-sm font-semibold transition-colors ${tab === "all" ? "text-brand-500" : "text-white/70 hover:text-white"}`}
            onClick={() => selectTab("all")}
          >
            All Movies
          </button>
          <button
            className={`cursor-pointer text-sm font-semibold transition-colors ${tab === "favorites" ? "text-brand-500" : "text-white/70  hover:text-white"}`}
            onClick={() => selectTab("favorites")}
          >
            Favorites
          </button>
          <button onClick={onToggleTheme} className="cursor-pointer w-9 h-9 rounded-full bg-gray-100/20">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
        
            <button className=" md:hidden flex items-center justify-center w-10 h-10 bg-black/10 dark:bg-white/10 rounded-full border dark:border-white/10 border-black/10 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'X' : '☰'}
            </button>
      </div>
      {isMenuOpen && <div className=" flex flex-col px-6 pb-4 gap-1">
        <button
            className={`text-left py-2 cursor-pointer text-sm font-semibold transition-colors ${tab === "all" ? "text-brand-500" :  "text-white/70  hover:text-white"}`}
            onClick={() => selectTab("all")}
          >
            All Movies
          </button>
          <button
            className={`text-left py-2 cursor-pointer text-sm font-semibold transition-colors ${tab === "favorites" ? "text-brand-500" : "dark:text-white/70 hover:text-neutral-600 text-neutral-600"}`}
            onClick={() => selectTab("favorites")}
          >
            Favorites
          </button>
          <button onClick={onToggleTheme} className="text-left py-2 cursor-pointer text-sm text-neutral-600 font-semibold dark:text-white/70">
              {theme === 'dark' ? '☀ Light Mode' : '☾ Dark Mode'}
          </button></div>}
    </nav>
  );
}

export default Navbar;
