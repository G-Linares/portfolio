import React from "react";

import Image from "next/image";

import Chip from "./Chip";
import { HiOutlineCode, HiOutlineEye } from "react-icons/hi";

const WorkCard = (props) => {
  const {
    thumbnail,
    title,
    description,
    status,
    categories,
    codeURL,
    demoURL
  } = props;
  return (
    <div className="flex-grow bg-paper dark:bg-paperDark p-3 mb-3 mx-3 md:mx-2 shadow-normal rounded-lg overflow-hidden">
      <div className="rounded-lg overflow-hidden leading-none">
        <Image
          src={thumbnail}
          alt="thumbnail"
          objectFit="cover"
          className="lg:h-48 md:h-36 w-full object-cover rounded-lg object-center"
          height={400}
          width={600}
        />
      </div>
      <div className="pt-4">
        <div className="flex flex-row items-center mb-2 relative">
          {status == 1 && (
            <div className='w-[10px] h-[10px] relative bg-primary rounded-full after:content-[""] after:animate-ping after:bg-primary after:top-[-2px] after:left-[-2px] after:w-[14px] after:h-[14px] after:absolute after:rounded-full'></div>
          )}
          {status == 2 && (
            <div className="w-[10px] h-[10px] relative bg-green-500 rounded-full"></div>
          )}
          {status == 3 && (
            <div className="w-[10px] h-[10px] relative bg-red-500 rounded-full"></div>
          )}
          <div className="text-xs capitalize ml-2.5">
            {status == 1 && "working on"}
            {status == 2 && "completed"}
            {status == 3 && "incomplete"}
          </div>
        </div>
        <h1 className="title-font text-lg capitalize font-bold text-textPrimary dark:text-textDarkPrimary mb-2">
          {title}
        </h1>
        <p className="text-xs leading-relaxed text-textSecondary dark:text-textDarkSecondary mb-3">
          {description}
        </p>
        {categories.length > 0 && (
          <span className="flex flex-wrap mb-2">
            {categories.map(({ name }, index) => (
              <div key={index}>
                <Chip>{name}</Chip>
              </div>
            ))}
          </span>
        )}
        <div className="flex items-center flex-nowrap">
          <a
            href={codeURL}
            className="inline-flex w-full shadow-normal justify-center items-center cursor-pointer transition-all duration-300 py-2 px-3 text-md font-md text-center rounded-lg outline-none text-textPrimary/60 dark:text-textDarkPrimary  bg-black/5 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white mr-2"
          >
            <HiOutlineCode className="w-4 h-4 stroke-[3px]" />
          </a>
          <a
            href={demoURL}
            className="inline-flex w-full justify-center shadow-normal items-center cursor-pointer transition-all duration-300 py-2 px-3 text-md font-md text-center rounded-lg outline-none text-textPrimary/60 dark:text-textDarkPrimary  bg-black/5 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white"
          >
            <HiOutlineEye className="w-4 h-4 stroke-[3px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
