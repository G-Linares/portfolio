import "../styles/globals.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../Components/Layout";

// this function will allow you to render a loader before the page loads when you use the Link componenet
function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    !loading && (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="flex items-center justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-green-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    )
  );
}

//theme provider will allow me to change whole page themes, in this case the darm mode, mas info aqui https://dev.to/m0nm/nextjs-theme-managing-with-next-themes-and-tailwind-css-1kpe
// the attribute class is used because we are using tailwind and tailwind is applied to classes
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Loading />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
