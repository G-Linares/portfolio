import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//-----Third party libraries------
import { useTheme } from "next-themes";

//since this is a layout it will pass the props to be rendered as other components
const Layout = (props) => {
  const { children } = props;
  const { systemTheme, theme, setTheme } = useTheme();

  //this will toggle the theme with the custom library that I implemented on the _app.js
  const themeToggle = () => {
    const currentTheme = theme == "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  //this will be the only toggle for the dark UI
  return (
    <div>
      <div id="top" />
      <div className="relative flex flex-col min-h-screen bg-default dark:bg-defaultDark text-textPrimary dark:text-textDarkPrimary">
        <Header
          themeToggle={themeToggle}
          theme={theme == "system" ? systemTheme : theme}
        />
        <main className="flex-grow bg-default dark:bg-defaultDark">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
