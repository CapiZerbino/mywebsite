import React from "react";

function Footer() {
  return (
    <div className="flex-col gap-5 flex justify-center items-center mt-14">
      <a href="">
        <div className="flex-col gap-5 flex justify-center items-center">
          <div className="bg-[url('/src/assets/images/avatarNT.JPG')] bg-cover bg-center bg- h-16 w-16 rounded-full ring-2 ring-offset-2 ring-offset-slate-400"></div>
          <span className="text-slate-400 ml-4 font-bold tracking-widest text-lg">
            NGHIATIEU
          </span>
        </div>
      </a>
      <span className="text-gray-600">© 2021. All rights reserved by NGHIATIEU</span>
    </div>
  );
}

export default Footer;
