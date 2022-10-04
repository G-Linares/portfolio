import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../Components/Layout";

//theme provider will allow me to change whole page themes, in this case the darm mode, mas info aqui https://dev.to/m0nm/nextjs-theme-managing-with-next-themes-and-tailwind-css-1kpe
// the attribute class is used because we are using tailwind and tailwind is applied to classes
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
