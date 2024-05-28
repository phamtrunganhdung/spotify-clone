"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const handleAddPlayList = () => {};
  return (
    <div
      className="library-container
  flex flex-col
  "
    >
      <div
        className="flex
items-center
justify-between
px-5
py-4"
      >
        <div
          className="inline-flex
    items-center
    gap-x-2"
        >
          <TbPlaylist className="text-neutral-400 cursor-pointer" size={26} />
          <p
            className="text-neutral-400
font-medium
text-md"
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={handleAddPlayList}
          className="cursor-pointer text-neutral-400 hover:text-white
        transition "
          size={20}
        />
      </div>
      <div
        className="
        flex
        felx-col
        gap-y-2
        mt-4
        px-3"
      >
        List of Songs!
      </div>
    </div>
  );
};

export default Library;
