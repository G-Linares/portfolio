import React from "react";

const Chip = (props) => {
  const { children, className } = props;
  return (
    <div
      className={` ${className} cursor-pointer bg-primary dark:bg-white/5 dark:border-transparent mr-2 mb-2 px-3 py-1.5 rounded-3xl select-none font-medium tracking-wide text-xs border-1 border-primary text-white`}
    >
      {children}
    </div>
  );
};

export default Chip;
