import React, { useState } from "react";
import { useRouter } from "next/router";

//impoirting third party library
import {
  HiOutlineUser,
  HiOutlineCode,
  HiChevronUp,
  HiOutlineDocumentText,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineLightningBolt,
  HiOutlineMail
} from "react-icons/hi";
import { FaRegHandSpock } from "react-icons/fa";

const Header = (props) => {
  const { theme, themeToggle } = props;
  const router = useRouter();

  const navigations = [
    {
      name: "About",
      url: "#about",
      icon: <HiOutlineUser className="w-5 h-5" />
    },
    {
      name: "Experience",
      url: "#services",
      icon: <HiOutlineLightningBolt className="w-5 h-5" />
    },
    {
      name: "Projects",
      url: "#work",
      icon: <HiOutlineCode className="w-5 h-5" />
    },
    {
      name: "Contact",
      url: "#contact",
      icon: <HiOutlineMail className="w-5 h-5" />
    }
  ];
  const active = (url) => {
    return router.asPath == url;
  };

  //this state will control when the "Scroll to top button will be showed"
  const [showButton, setShowButton] = useState(false);
  //this will be a bar that will slowly grow depending on the percentage of the page scrolled
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("header-bar").style.width = `${percentage}%`;
    window.scrollY > 1 ? setShowButton(true) : setShowButton(false);
  };
  //this triggers the bar percentage animation
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  //this resets the bar to 0
  const handleRouteChange = () => {
    document.getElementById("header-bar").style.width = "0px";
  };
  React.useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const handleScroll = (link) => {
    try {
      if (router.pathname !== "/") {
        router.push(`/${link}`);
      } else {
        document
          .querySelector(link)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header
        className={`backdrop-blur-sm bg-paper/70 dark:bg-paperDark/80 body-font sticky top-0 w-full z-50 transition-shadow duration-800 shadow-sm`}
      >
        <div className="max-w-[1140px] mx-auto dark:text-textDarkPrimary text-textPrimary">
          <div className="mx-auto flex flex-wrap p-2.5 items-center flex-col xs:flex-row">
            <div
              onClick={() => handleScroll("#top")}
              className="flex title-font font-medium items-center justify-items-center text-textPrimary dark:text-textDarkPrimary cursor-pointer"
            >
              <FaRegHandSpock alt="spock hola a todos" width={36} height={36} />
              <span className="ml-2 text-lg md:text-xl">G. Linares</span>
            </div>
            <nav className="mt-3 xs:mt-0 xs:!ml-auto flex flex-wrap items-center text-base justify-center">
              {navigations.map(({ name, url, icon }, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleScroll(url)}
                  className={` hover:bg-black/5 bg-transparent font-medium outline-none rounded-lg text-sm p-1 px-1.5 m-1 md:px-4 md:py-2  flex  ${
                    active(url)
                      ? "bg-primary/90 !text-white hover:!bg-primary"
                      : ""
                  } dark:text-white  dark:hover:bg-white/5`}
                >
                  {icon}
                  <div className="pl-1.5 hidden md:block stroke-[2.5px]">
                    {name}
                  </div>
                </button>
              ))}
              <button
                type="button"
                onClick={themeToggle}
                className={` hover:bg-black/5 outline-none font-medium rounded-lg text-sm p-1 px-1.5 m-1 md:px-4 md:py-2 flex `}
              >
                {theme == "light" ? (
                  <HiOutlineMoon className="w-5 h-5 dark:text-white  dark:hover:bg-white/5" />
                ) : (
                  <HiOutlineSun className="w-5 h-5 stroke-[2.25px]" />
                )}
              </button>
            </nav>
          </div>
        </div>
        <div id="header-bar" className="border-b-[2px] border-primary w-0" />
      </header>

      <button
        type="button"
        onClick={() => handleScroll("#top")}
        className={`${
          !showButton && "scale-0"
        } dark:text-textDarkPrimary scale-1 fixed bottom-5 right-5 z-[6000] shadow-2xl outline-none font-medium rounded-full text-sm p-2.5 m-1 flex bg-primary/90 text-white hover:!bg-primary `}
      >
        <HiChevronUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default Header;
