import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import ImageIcon from "../assets/image.svg";
import MicIcon from "../assets/mic.svg";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
  const {query} =useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0   "
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
        type="text"
      />

      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="icon" />
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="micicon" />
      </div>
    </div>
  );
};

export default SearchInput;
