import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1440px] flex justify-between items-center mx-auto h-[84px] border-b-[1px] border-[#616161]">
      <Image
        src="/logo.svg"
        alt="InfoHomes Logo"
        width={160}
        height={41}
        priority
      />

      <div className="flex gap-4">
        <button className="bg-[#EA3EFF] w-[30px] h-[30px] text-center text-[#FBFBFB] rounded-[5px]">
          i
        </button>
        <button className="bg-[#D3D3D3] w-[100px] h-[30px] text-center text-[#0E0B13] rounded-[5px]">
          Login
        </button>
        <Image
          src="/darkmodebutton.svg"
          alt="Darkmode button"
          width={17}
          height={22}
        />
        <Image
          src="/hamburgericon.svg"
          alt="hamburger menu button"
          width={17}
          height={22}
        />
      </div>
    </div>
  );
};

export default Header;
