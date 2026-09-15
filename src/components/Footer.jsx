import React from "react";

function Footer() {
  return (
    <footer className="w-full  border-t border-black/10 dark:border-white/20">
      <div className=" flex flex-col md:flex-row max-w-[1180px] m-auto  justify-between items-center gap-4 px-6 py-6 text-sm text-neutral-600  dark:text-white/70">
        <span className=" text-neutral-900 dark:text-white text-sm tracking-tight font-semibold">
          Movie
          <span className="text-brand-500">Find</span>
        </span>
        <div className="flex m-auto gap-6 ">
          <a href="" className="hover:text-black dark:hover:text-white transition-colors" >About</a>
          <a href="" className="hover:text-black dark:hover:text-white transition-colors" >GitHub</a>
          <a href="" className=" hover:text-black dark:hover:text-white transition-colors" >Contact</a>
        </div>
         <p className="">&copy; 2026 MovieFind</p>
      </div>
    </footer>
  );
}

export default Footer;
