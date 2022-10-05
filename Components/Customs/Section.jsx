import React from "react";
//this component was made to have static parameters for the section. It will receive all the props that I plan to implement
const Section = (props) => {
  const {
    id,
    title,
    subtitle,
    description,
    children,
    className,
    titleClassName,
    childrenWrapperClassName
  } = props;
  return (
    <section
      id={id ? id : ""}
      className={`${
        className ? className : ""
      } py-5 xs:py-10 px-4 md:py-16 md:px-7 bg-default dark:bg-defaultDark  body-font`}
    >
      {(subtitle || title || description) && (
        <div className="flex flex-col text-center lg:max-w-[500px] m-auto mb-4 xs:mb-10 px-1">
          {subtitle && (
            <span className="text-sm font-bold text-primary mb-1 xs:mb-3">
              {subtitle}
            </span>
          )}
          {title && (
            <h3
              className={`${
                titleClassName ? titleClassName : ""
              } text-2xl md:text-4xl capitalize font-bold mb-3 `}
            >
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-textSecondary dark:text-textDarkSecondary/60">
              {description}
            </p>
          )}
        </div>
      )}
      {children && (
        <div
          className={`max-w-[1140px] m-auto ${
            childrenWrapperClassName ? childrenWrapperClassName : ""
          }`}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
