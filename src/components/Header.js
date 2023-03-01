/** @format */

import React from "react";
import { images } from "../mockdata/images";
import { PUBLIC_IMAGES_PATH } from "../utils/constants";

const Header = ({ setShowSideBar }) => {
  return (
    <div className="flex justify-between items-center md:px-6 px-4 bg-white h-[10vh] w-[100%]">
      <div className="md:flex hidden">
        <div
          className="flex hover:text-[#109CF1] hover:cursor-pointer"
          onClick={() => {
            window.open("https://www.copilotly.com/", "_blank");
          }}>
          <img
            src={PUBLIC_IMAGES_PATH + "/phone.png"}
            alt="call"
            className="mr-2"
          />
          1(877)789-8767{" "}
        </div>

        <div
          className="flex hover:text-[#109CF1] hover:cursor-pointer"
          onClick={() => {
            window.open("https://www.copilotly.com/", "_blank");
          }}>
          <img
            src={PUBLIC_IMAGES_PATH + "/email.png"}
            alt="call"
            className="mr-2 ml-6"
          />
          help@copilotly.com{" "}
        </div>
      </div>
      <div
        className="mr-3 md:hidden "
        onClick={() => {
          setShowSideBar(true);
        }}>
        <img
          src={PUBLIC_IMAGES_PATH + "/menu.png"}
          alt="toggle-menu"
          className="mr-2 md:ml-6 md:w-[25px] w-[20px]"
        />
      </div>

      <div className="flex">
        {images?.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.image}
                alt=""
                className={`mx-3 md:mx-6 cursor-pointer  w-[18px] md:w-[auto] ${
                  item.id === 7 ? " w-[25px] md:w-[36px]" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
