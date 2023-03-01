/** @format */

import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { PUBLIC_IMAGES_PATH } from "../utils/constants";
import Card from "./Card";
import Header from "./Header";
import SideBar from "./SideBar";
import { data } from "../mockdata/CardsData";
const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [cardsData, setCardsData] = useState(data);
  const [searchQuery, setSearchQuery] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  /**
   * @description : pagination functionality
   */
  const showTotal = (total, range) => {
    return (
      <span className="text-[11px] md:text-base">
        No of Records : {range[0]} - {range[1]} of {total}
      </span>
    );
  };
  const onShowSizeChange = (current, pageSize) => {
    setCurrentPage(current);
    setPageSize(pageSize);
  };
  const calculateIndexes = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return { startIndex, endIndex };
  };
  const { startIndex, endIndex } = calculateIndexes();

  /**
   * @description : search functionality
   */
  useEffect(() => {
    if (searchQuery === " ") {
      setCardsData(data);
    } else {
      let filteredItems = cardsData.filter((item) => {
        return item.jobRole
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase());
      });
      setCardsData(filteredItems);
    }
  }, [searchQuery]);

  /**
   * @description : sorting functionality
   */
  const sortData = (e) => {
    if (e.target.value === "Ascending") {
      const ascSort = [...cardsData].sort((a, b) =>
        a.jobRole.localeCompare(b.jobRole)
      );
      setCardsData(ascSort);
    } else if (e.target.value === "Descending") {
      const desSort = [...cardsData].sort((a, b) =>
        b.jobRole.localeCompare(a.jobRole)
      );
      setCardsData(desSort);
    } else {
      setCardsData(data);
    }
  };

  return (
    <div className="flex">
      <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="w-[100%]">
        <Header setShowSideBar={setShowSideBar} />
        <div
          className={` bg-[#F5F6F8] md:px-20 px-4 ${
            showSideBar ? "hidden" : "block"
          } ${cardsData?.length === 0 ? "h-[90vh]" : "h-auto"}`}>
          <div className="md:flex md:justify-between md:py-6 py-3">
            <div className="flex md:block">
              <button className="bg-[#E7EFFA] w-[160px] py-2 capitalize mr-2 rounded-md">
                my jobs{" "}
              </button>
              <button className="bg-[#E7EFFA] w-[160px] py-2 capitalize rounded-md">
                {" "}
                my interviews
              </button>
            </div>
            <div className="text-center md:text-start mt-4 md:mt-0">
              <button className="bg-[#75C059] text-white w-[160px] py-2 capitalize rounded-md">
                {" "}
                create new jobs{" "}
              </button>
            </div>
          </div>
          <div className="md:flex md:justify-between md:items-center bg-white p-4 mb-1">
            <div className="flex items-center justify-between md:justify-start">
              <div>
                Sort by :{" "}
                <select
                  className="md:mx-4 mx-1 text-[#2EA8F3] outline-none md:px-2"
                  onChange={sortData}>
                  <option value={""}>select </option>
                  <option value={"Ascending"}> a - z </option>
                  <option value={"Descending"}> z - a </option>
                </select>
              </div>
              <div>Most recent</div>
            </div>

            <div className="flex items-center bg-[#E7EFFA] rounded-full px-2 py-2 mt-3 md:mt-0">
              <img
                src={PUBLIC_IMAGES_PATH + "/search.png"}
                alt="call"
                className="mr-2"
              />
              <input
                type={"text"}
                placeholder="Search by Job Title"
                className="bg-[#E7EFFA] outline-none w-[75%]"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Card
              cardsData={cardsData}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </div>
          <div className="py-[30px] flex justify-center">
            <Pagination
              onChange={setCurrentPage}
              total={cardsData.length}
              showTotal={showTotal}
              current={currentPage}
              pageSizeOptions={[5, 7, 10]}
              pageSize={pageSize}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              responsive={true}
              hideOnSinglePage={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
