/** @format */

import React, { useState } from "react";
import { Menus } from "../mockdata/SidebarMenus";
import { PUBLIC_IMAGES_PATH } from "../utils/constants";

const SideBar = ({ showSideBar, setShowSideBar }) => {
  const [activeMenu, setActiveMenu] = useState(3);
  return (
    <div
      className={`bg-white md:w-[326px] w-[100%] z-10 md:z-0 absolute md:static shadow-custom-shadow md:block h-[100vh] md:h-auto ${
        showSideBar ? "block" : "hidden"
      }`}>
      <div
        className="h-[10vh] border-b flex items-center justify-end pr-8 "
        onClick={() => {
          setShowSideBar(false);
        }}>
        <img
          src={PUBLIC_IMAGES_PATH + "/close.png"}
          alt="close-icon"
          className="w-[18px] md:hidden"
        />
      </div>

      <div className="pl-10 md:pl-6">
        <div className="flex pt-8 md:pb-4 pb-2 pr-4">
          <div className="rounded-full flex items-center justify-center">
            <img
              src={PUBLIC_IMAGES_PATH + "/profile-pic.png"}
              alt="call"
              className="w-[55px] h-[55px] mr-4 rounded-full"
            />
          </div>
          <div className="md:ml-2 text-start">
            <div className="font-semibold capitalize md:text-lg text-base">
              {" "}
              john smith
            </div>
            <div className="text-gray-500 text-base font-normal">
              {" "}
              johnsmith@gmail.com
            </div>
          </div>
        </div>

        <div className="font-bold capitalize text-lg py-6 md:py-8 ">
          all jobs (19){" "}
        </div>
        <div className="text-base">
          {Menus?.map((item) => {
            return (
              <div
                className={`md:py-4 py-3 md:pr-0 flex hover:[#109CF1] cursor-pointer ${
                  item.id === activeMenu &&
                  " text-[#109CF1] md:border-r-8 md:border-[#109CF1]"
                }`}
                onClick={() => {
                  setActiveMenu(item.id);
                }}>
                <img src={item.icon} alt="" className="mr-6 md:mr-4" />
                <span> {item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
