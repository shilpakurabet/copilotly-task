/** @format */

import { Checkbox, Tooltip } from "antd";
import React, { useState } from "react";
import { PUBLIC_IMAGES_PATH } from "../utils/constants";

const Card = ({ cardsData, startIndex, endIndex }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  return (
    <div className="w-full ">
      {cardsData?.slice(startIndex, endIndex)?.map((item) => {
        return (
          <div className="bg-white mb-2">
            <div className="flex justify-between items-center md:pl-6 pl-3 md:pr-10 pr-3 md:py-4 py-1">
              <div className="flex items-center">
                <Checkbox />
                <div className="bg-[#B5B5BE] md:w-[35px] md:h-[35px] w-[30px] h-[20px] rounded-full flex justify-center items-center md:ml-7 ml-3 md:mr-5 mr-3">
                  <img
                    src={PUBLIC_IMAGES_PATH + "/not-allowed.png"}
                    alt=""
                    className="md:w-[20px] md:h-[20px] w-[10px] h-[10px] rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="font-semibold md:text-base text-xs">
                    {" "}
                    {item.jobRole}{" "}
                  </div>
                  <div className="text-[#6A707E] text-[10px] md:text-[14px]">
                    {item.date}{" "}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setId(item.id);
                    setShow(!show);
                  }}>
                  <img
                    src={PUBLIC_IMAGES_PATH + "/down.png"}
                    alt="call"
                    className="w-[20px] ml-4 md:ml-0"
                  />
                </div>
                <div>
                  <button className="md:w-[140px] py-2 bg-[#109CF1] text-white md:uppercase rounded-md md:ml-14 ml-6 text-xs md:text-base  w-[75px]">
                    {" "}
                    Start Hiring{" "}
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            {item.id === id && show && (
              <div className="flex pt-4 pb-10 bg-white border-t-[3px] border-[#E5E9EC]">
                <div className="w-[50%] border-r-2 border-r-gray-400 flex justify-center text-sm md:text-base ml-4 md:ml-0">
                  <div>
                    <div className="leading-8">
                      {" "}
                      <span className="font-medium"> Location : </span> Durham,
                      North Carolina
                    </div>
                    <div className="leading-8">
                      {" "}
                      <span className="font-medium"> Owner : </span> Ana tenorio
                    </div>
                    <div className="leading-8">
                      {" "}
                      <span className="font-medium">
                        {" "}
                        Hiring manager :{" "}
                      </span>{" "}
                      Ana tenorio
                    </div>
                    <div className="leading-10 my-2 font-medium">
                      {" "}
                      14 applicants
                    </div>
                    <div className="leading-8">
                      {" "}
                      <span className="font-medium">strongFits : </span> 0
                    </div>
                    <div className="leading-8">
                      <span className="font-medium"> Fits : </span>2
                    </div>
                    <div className="leading-8">
                      <span className="font-medium"> weak Fits : </span>
                      10
                    </div>
                    <div className="leading-8">
                      <span className="font-medium"> Distortions : </span>3
                    </div>
                    <div className="leading-10 mt-2 font-medium">
                      5 Incomplete Applications
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex justify-start md:ml-12 ml-2 text-sm md:text-base">
                  <div>
                    <button className="bg-[#75C059] text-white py-1.5 md:w-[200px] px-1 capitalize mb-4 rounded-md text-xs md:text-base">
                      <div className="flex justify-center items-center">
                        <img
                          src={PUBLIC_IMAGES_PATH + "/view.png"}
                          alt=""
                          className="px-2 md:w-[45px] w-[35px]"
                        />
                        view applicants{" "}
                      </div>
                    </button>

                    <div className="flex mb-4 px-2">
                      <Tooltip
                        placement="right"
                        className="flex"
                        title={
                          "lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }>
                        <img
                          src={PUBLIC_IMAGES_PATH + "/edit.png"}
                          alt=""
                          className="mr-4"
                        />
                        Edit Job
                      </Tooltip>
                    </div>

                    <div className="flex mb-4 px-2">
                      <Tooltip
                        placement="right"
                        className="flex"
                        title={
                          "lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }>
                        <img
                          src={PUBLIC_IMAGES_PATH + "/docs.png"}
                          alt=""
                          className="mr-4"
                        />
                        Re-post this job
                      </Tooltip>
                    </div>
                    <div className="flex px-2">
                      <Tooltip
                        placement="right"
                        className="flex"
                        title={
                          "lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }>
                        <img
                          src={PUBLIC_IMAGES_PATH + "/job-seeking.png"}
                          alt=""
                          className="mr-4"
                        />
                        Job Description
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/*  */}
          </div>
        );
      })}
      {cardsData.length === 0 && (
        <div className="flex justify-center items-center mt-28 md:mt-40 font-semibold">
          No Matching Data..!
        </div>
      )}
    </div>
  );
};

export default Card;
